import React, { useEffect, useState } from "react";
import { markerdata } from '../components/markerData';

import '../css/Map.css';

import pf from '../images/pf.png';
import mibun from '../images/mirim-bunsick.png';
import markerbtn from '../images/marker-btn.png';

import restaurant from '../images/restaurant.png';
import cafe from '../images/cafe.png';
import dessert from '../images/dessert.png';
import convenienceStore from '../images/convenience-store.png';
import school from '../images/school.png';

function Map() {
    const { kakao } = window;

    const [activeButton, setActiveButton] = useState(null);
    const [map, setMap] = useState(null);
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCenter, setMapCenter] = useState({ lat: 37.4667835831981, lng: 126.932529286133 });
    const [markers, setMarkers] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null);

    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        if (window.kakao) {
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
                level: mapZoom,
            };
            const newMap = new kakao.maps.Map(container, options);
            setMap(newMap);
            createMarkers(newMap, markerdata);
        } else {
            setTimeout(mapscript, 1000);
        }
    };

    const createMarkers = (mapInstance, data) => {
        const newMarkers = data.flatMap((category) => {
            if (Array.isArray(category)) { // 배열인지 확인
                return category.map((el) => {
                    const imageSrc = el.value === '음식점' ? restaurant : el.value === '카페' ? cafe : el.value === '디저트' ? dessert : convenienceStore;
                    const marker = new kakao.maps.Marker({
                        map: mapInstance,
                        position: new kakao.maps.LatLng(el.lat, el.lng),
                        image: createMarkerImage(imageSrc),
                    });

                    kakao.maps.event.addListener(marker, 'click', () => {
                        setActiveMarker(el);
                    });

                    return marker;
                });
            } else {
                return []; // 배열이 아닌 경우 빈 배열 반환
            }
        });

        // 학교 마커 생성
        const schoolMarker = new kakao.maps.Marker({
            map: mapInstance,
            position: new kakao.maps.LatLng(37.4667835831981, 126.932529286133),
            image: createMarkerImage(school),
        });

        // 마커 상태 업데이트
        setMarkers([...newMarkers, schoolMarker]);
    };

    const createMarkerImage = (src) => {
        const imageSrc = src;
        const imageSize = new kakao.maps.Size(44, 55);
        return new kakao.maps.MarkerImage(imageSrc, imageSize);
    };

    const handleButtonClick = (buttonValue) => {
        if (activeButton === buttonValue) {
            setActiveButton(null);
            setMapMarkers(markerdata);
        } else {
            setActiveButton(buttonValue);
            const filteredData = markerdata.map(category => {
                if (Array.isArray(category)) {
                    return category.filter(data => data.value === buttonValue);
                }
                return category;
            });
            setMapMarkers(filteredData);
        }
    };

    const setMapMarkers = (data) => {
        markers.forEach(marker => marker.setMap(null)); // 모든 마커 제거
        createMarkers(map, data); // 새로운 마커 생성
    };

    const closeActiveMarker = () => {
        const markerContainer = document.querySelector('.click-marker-container');
        if (markerContainer) {
            markerContainer.classList.add('fade-out');
            setTimeout(() => {
                setActiveMarker(null);
            }, 800);
        }
    };

    return (
        <div className="hot-place">
            <div className="full-display">
                <div className="btns">
                    <div className={activeButton === '학교' ? 'active' : undefined}></div>
                    <button
                        className={activeButton === '음식점' ? 'active' : ''}
                        onClick={() => handleButtonClick('음식점')}
                    >
                        음식점
                    </button>
                    <button
                        className={activeButton === '카페' ? 'active' : ''}
                        onClick={() => handleButtonClick('카페')}
                    >
                        카페
                    </button>
                    <div className="btn-margin"></div>
                    <button
                        className={activeButton === '편의점' ? 'active' : ''}
                        onClick={() => handleButtonClick('편의점')}
                    >
                        편의점
                    </button>
                    <button
                        className={activeButton === '디저트' ? 'active' : ''}
                        onClick={() => handleButtonClick('디저트')}
                    >
                        디저트
                    </button>
                </div>
                <div className="place">
                    <div id="map" className="map-class"></div>
                </div>
                {activeMarker && (
                    <div className="click-marker-container">
                        <div className="click-marker">
                            <div className="marker-setting">
                                <p className="marker-title">{activeMarker.title}</p>
                                <div className="marker-img-detail">
                                    {activeMarker.image ? (
                                        <img src={activeMarker.image} className="marker-img" alt={activeMarker.title} />
                                    ) : (
                                        <div className="no-image-placeholder">
                                            <p>이미지가 없습니다.</p>
                                        </div>
                                    )}
                                    <ul>
                                        {activeMarker.details.map((detail, index) => (
                                            <li key={index} className="marker-detail">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="recommendation"> 추천글 </p>
                                <div className="developer-collection">
                                    <div className="developer">
                                        {activeMarker.reviews.map((review, index) => (
                                            <div key={index} className="developer-name-review">
                                                <p className="developer-name">{review.developer}</p>
                                                <p className="developer-review">{review.review}</p>
                                                <hr className="developer-hr" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="close-btn" onClick={() => closeActiveMarker()}><img src={markerbtn} alt="Close" /></button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Map;
