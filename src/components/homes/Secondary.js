import React, { useEffect, useRef } from 'react';
import icon1 from '../../images/icons/secondary-icon1.png';
import icon2 from '../../images/icons/secondary-icon3.png';
import icon3 from '../../images/icons/secondary-icon4.png';
import icon4 from '../../images/icons/secondary-icon2.png';
import icon5 from '../../images/icons/secondary-icon7.png';
import icon6 from '../../images/icons/secondary-icon5.png';
import icon7 from '../../images/icons/secondary-icon6.png';
import icon8 from '../../images/icons/secondary-icon10.png';

import bgImg from '../../images/secondary-bg.png'


function Secondary() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const onScroll = () => {
            const scrollTop = container.scrollTop;
            container.style.backgroundPositionX = `-${scrollTop}px`;
        };
        container.addEventListener('scroll', onScroll);

        return () => {
            container.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="Secondary" ref={containerRef} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='iconsContainer1'>
                <div className='iconContainer1'>
                    <div className='iconContainer1-1'>
                        <img src={icon1} className='icon1' />
                        <div className='iconContainer1-2'>
                            <img src={icon2} className='icon2' />
                            <img src={icon3} className='icon3' />
                        </div>
                    </div>
                    <div className='iconContainer1-3'>
                        <img src={icon4} className='icon4' />
                        <img src={icon5} className='icon5' />
                    </div>
                </div>
                <div className='iconContainer1-2'>
                    <img src={icon6} className='icon6' />
                </div>
            </div>

            <div className='iconsContainer2'>
                <img src={icon3} className='icon3-1' />
                <img src={icon7} className='icon7' />
                <p>학교 안에서<img src={icon8} className='icon8' /><br /> 나의 메이트 찾기!</p>
            </div>
        </div>
    )
}

export default Secondary;
