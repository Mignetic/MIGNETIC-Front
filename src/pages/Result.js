import bgImg from '../images/result-bg.png'
import logoimg from '../images/icons/logo.png'
import stars from '../images/stars.png'
import tipimg from '../images/icons/result-graph-tip.png'

import '../css/Result.css'
import Footer from '../components/Footer'

import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from 'react-router-dom';

function Result() {
    const graphElements = useRef([]);
    const answerElements = useRef([]);
    const navigate = useNavigate();
    
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';

    useEffect(() => {
        window.scrollTo(0, 0);

        graphElements.current.forEach((graph, index) => {
            graph.style.opacity = '0';
            graph.style.transform = 'translateY(100%)';
            setTimeout(() => {
                graph.classList.add('graph-animation');
            }, index * 200); // 0.2초 간격으로 애니메이션 적용
        });

        answerElements.current.forEach((answer, index) => {
            answer.style.opacity = '0';
            answer.style.transform = 'translateY(100%)';
            setTimeout(() => {
                answer.classList.add('answer-animation');
            }, index * 200); // 0.2초 간격으로 애니메이션 적용
        });
    }, []);

    const handleTest = () => {
        navigate('/testselect');
    }

    const handleHotPlace = () => {
        navigate('/hotplace');
    }

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
                    {/* 타입 설명 */}
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
                                <div className='friend-graph friend-graph-1' ref={(el) => (graphElements.current[0] = el)}>
                                    <p className='answer answer-num-1'>9개</p>
                                    <Link to='/letterwrite'>
                                        <div className='graph graph-1'></div>
                                    </Link>
                                    <p className='friend-name friend-name-1'>윤서</p>
                                </div>
                                <div className='friend-graph friend-graph-2' ref={(el) => (graphElements.current[1] = el)}>
                                    <p className='answer answer-num-2'>8개</p>
                                    <Link to='/letterwrite'>
                                        <div className='graph graph-2'></div>
                                    </Link>
                                    <p className='friend-name friend-name-2'>엉덩이</p>
                                </div>
                                <div className='friend-graph friend-graph-3' ref={(el) => (graphElements.current[2] = el)}>
                                    <p className='answer answer-num-3'>4개</p>
                                    <Link to='/letterwrite'>
                                        <div className='graph graph-3'></div>
                                    </Link>
                                    <p className='friend-name friend-name-3'>뿡뿡</p>
                                </div>
                                <div className='friend-graph friend-graph-4' ref={(el) => (graphElements.current[3] = el)}>
                                    <p className='answer answer-num-4'>2개</p>
                                    <Link to='/letterwrite'>
                                        <div className='graph graph-4'></div>
                                    </Link>
                                    <p className='friend-name friend-name-4'>빵구</p>
                                </div>
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
    )
}

export default Result;