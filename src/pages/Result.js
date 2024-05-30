import bgImg from '../images/result-bg.png'
import logoimg from '../images/icons/logo.png'
import stars from '../images/stars.png'
import tipimg from '../images/icons/result-graph-tip.png'

import '../css/Result.css'
import Footer from '../components/Footer'

import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';

function Result() {
    const graphRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const graphNum = ['9개', '8개', '4개', '2개'];
    const graphName = ['윤서', '엉덩이', '뿡뿡', '빵구'];
    const graphHeights = graphNum.map(num => `${parseInt(num) * 60}px`);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
        graphRefs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            graphRefs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = graphRefs.findIndex(ref => ref.current === entry.target);
                if (index !== -1) {
                    requestAnimationFrame(() => {
                        entry.target.style.height = graphHeights[index];
                        entry.target.style.transition = 'height 1s ease';
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    };

    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    const navigate = useNavigate();

    const handleTest = () => {
        navigate('/testselect');
    };
    const handleHotPlace = () => {
        navigate('/hotplace');
    };

    return (
        <div className='result'>
            <img src={logoimg} className="logoimg" />
            <div className='result-container'>
                <div className='type-container'>
                    <div className='your-type your-type-first'>
                        <p>당신의 타입은...</p>
                    </div>
                    <div className='type-name-stars'>
                        <img src={stars} className="stars stars-first" />
                        <div className='type-name'>
                            <p>Setter</p>
                        </div>
                        <img src={stars} className="stars stars-end" />
                    </div>
                    <div className='your-type your-type-end'>
                        <p>입니다</p>
                    </div>
                </div>
                <div className='type-description'>
                    <div className='type-li-container'>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                            여기는 타입의 설명을 쭉 쓰기
                        </li>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                            여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                            여기는 타입의 설명을 쭉 쓰기
                        </li>
                    </div>
                    <div className='finding-friend-graph'>
                        <div className='finding-friend'>
                            <div className='similar-friend'>
                                <p>나와 비슷한 친구</p>
                            </div>
                            <div className='same-answers'>
                                <p>10개 중 같은 답을 선택한 개수</p>
                            </div>
                        </div>
                        <div className='friend-graph-name-container'>
                            <div className='friend-graph-container'>
                                {graphRefs.map((ref, index) => (
                                    <div className={`friend-graph friend-graph-${index + 1}`} key={index}>
                                        <p className={`answer answer-num-${index + 1}`}>{graphNum[index]}</p>
                                        <Link to='/letterwrite'>
                                            <div className={`graph graph-${index + 1}`} ref={ref}></div>
                                        </Link>
                                        <p className={`friend-name friend-name-${index + 1}`}>{graphName[index]}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='friend-graph-bg'></div>
                        </div>
                    </div>
                    <div className='graph-tip'>
                        <img src={tipimg} className="tip-img" />
                        <p className='tip-text'>
                            그래프를 클릭하면 그 친구에게 <br></br>
                            편지를 쓸 수 있어요!
                        </p>
                    </div>
                    <div className='type-description-bg'></div>
                </div>
                <div className='btn-container'>
                    <button className='retry-btn' onClick={handleTest}>검사 다시하기</button>
                    <button className='hotplace-btn' onClick={handleHotPlace}>친구와 핫플 보기</button>
                </div>
            </div>
            <div className='footer'>
                <Footer position={"result"} />
            </div>
        </div>
    );
}

export default Result;