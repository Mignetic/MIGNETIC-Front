import React, { useEffect, useRef } from 'react';
import icon1 from '../../images/icons/secondary-icon1.png';
import icon2 from '../../images/icons/secondary-icon3.png';
import icon3 from '../../images/icons/secondary-icon4.png';
import icon4 from '../../images/icons/secondary-icon2.png';
import icon5 from '../../images/icons/secondary-icon7.png';
import icon6 from '../../images/icons/secondary-icon5.png';
import icon7 from '../../images/icons/secondary-icon6.png';
import icon8 from '../../images/icons/secondary-icon10.png';

import bgImg from '../../images/secondary-bg.png';

function Secondary() {
    const containerRef = useRef(null);
    const iconRefs = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const onWheel = (e) => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            if ((e.deltaY > 0 && container.scrollLeft < maxScrollLeft) || (e.deltaY < 0 && container.scrollLeft > 0)) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };
        container.addEventListener('wheel', onWheel);

        return () => {
            container.removeEventListener('wheel', onWheel);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate');
                        }, 500); // 1.5초 뒤에 애니메이션 시작
                    }
                });
            },
            { threshold: 0.1 }
        );

        iconRefs.current.forEach((icon) => {
            if (icon instanceof Element) {
                observer.observe(icon);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="Secondary" ref={containerRef} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='iconsContainer'>
                <div className='iconsContainer1'>
                    <div className='iconContainer1'>
                        <div className='iconContainer1-1'>
                            <img src={icon1} className='icon1' ref={(el) => (iconRefs.current.push(el))}/>
                            <div className='iconContainer1-2'>
                                <img src={icon2} className='icon2' ref={(el) => (iconRefs.current.push(el))}/>
                                <img src={icon3} className='icon3' ref={(el) => (iconRefs.current.push(el))}/>
                            </div>
                        </div>
                        <div className='iconContainer1-3'>
                            <img src={icon4} className='icon4' ref={(el) => (iconRefs.current.push(el))}/>
                            <img src={icon5} className='icon5' ref={(el) => (iconRefs.current.push(el))}/>
                        </div>
                    </div>
                    <div className='iconContainer2'>
                        <img src={icon6} className='icon6' ref={(el) => (iconRefs.current.push(el))}/>
                    </div>
                </div>

                <div className='iconsContainer2'>
                    <img src={icon3} className='icon3-1' ref={(el) => (iconRefs.current.push(el))}/>
                    <img src={icon7} className='icon7' ref={(el) => (iconRefs.current.push(el))}/>
                    <p>학교 안에서<img src={icon8} className='icon8' ref={(el) => (iconRefs.current.push(el))}/><br /> 나의 메이트 찾기!</p>
                </div>
            </div>
        </div>
    );
}

export default Secondary;