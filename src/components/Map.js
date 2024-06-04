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
    const [filteredMarkerData, setFilteredMarkerData] = useState(markerdata);
    const [activeMarker, setActiveMarker] = useState(null);

    useEffect(() => {
        if (!map) return;
        updateMap();
    }, [filteredMarkerData]);

    useEffect(() => {
        setFilteredMarkerData(markerdata);
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
            updateMap(newMap);
        } else {
            setTimeout(mapscript, 1000);
        }
    };

    const createMarkerImage = (src) => {
        const imageSrc = src;
        const imageSize = new kakao.maps.Size(44, 55);
        return new kakao.maps.MarkerImage(imageSrc, imageSize);
    };

    const updateMap = (newMap) => {
        if (!map && !newMap) return;

        const mapInstance = map || newMap;
        
        markers.forEach(marker => marker.setMap(null));

        const newMarkers = filteredMarkerData.map((el) => {
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

        const schoolMarker = new kakao.maps.Marker({
            map: mapInstance,
            position: new kakao.maps.LatLng(37.4667835831981, 126.932529286133),
            image: createMarkerImage(school),
        });

        setMarkers([...newMarkers, schoolMarker]);
    };

    const handleButtonClick = (buttonValue) => {
        if (activeButton === buttonValue) {
            setFilteredMarkerData(markerdata);
            closeActiveMarker();
            setActiveButton(null);
        } else {
            setActiveButton(buttonValue);
            setFilteredMarkerData(markerdata.filter(data => data.value === buttonValue));
        }
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
                                    <img src={mibun} className="marker-img" />
                                    <li className="marker-detail">
                                        여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세dy
                                    </li>
                                    <li className="marker-detail">
                                        여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세요
                                    </li>
                                    <li className="marker-detail">
                                        여기는 미림분식에 대한 글을 써주세요 여기는 미림분식에 대한 글을 써주세요
                                    </li>
                                </div>
                                <p className="recommendation"> 추천글 </p>
                                <div className="developer-collection">
                                    <div className="developer">
                                        <img src={pf} className="developer-profile" />
                                        <div className="developer-name-review">
                                            <p className="developer-name">양지아</p>
                                            <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                            <hr className="developer-hr"></hr>
                                        </div>
                                    </div>
                                    <div className="developer">
                                        <img src={pf} className="developer-profile" />
                                        <div className="developer-name-review">
                                            <p className="developer-name">양지아</p>
                                            <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                            <hr className="developer-hr"></hr>
                                        </div>
                                    </div>
                                    <div className="developer">
                                        <img src={pf} className="developer-profile" />
                                        <div className="developer-name-review">
                                            <p className="developer-name">양지아</p>
                                            <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                            <hr className="developer-hr"></hr>
                                        </div>
                                    </div>
                                    <div className="developer">
                                        <img src={pf} className="developer-profile" />
                                        <div className="developer-name-review">
                                            <p className="developer-name">양지아</p>
                                            <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                            <hr className="developer-hr"></hr>
                                        </div>
                                    </div>
                                    <div className="developer">
                                        <img src={pf} className="developer-profile" />
                                        <div className="developer-name-review">
                                            <p className="developer-name">양지아</p>
                                            <p className="developer-review">나보고어떡하라고어떻하라고어뜩하라고엉뜨켜라고우뚝하라고</p>
                                            <hr className="developer-hr"></hr>
                                        </div>
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