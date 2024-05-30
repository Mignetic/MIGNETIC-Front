import React, { useEffect, useRef } from 'react';
import icon1 from '../../images/icons/secondary-icon1.png';
import icon2 from '../../images/icons/secondary-icon2.png';
import icon3 from '../../images/icons/secondary-icon3.png';
import icon4 from '../../images/icons/secondary-icon4.png';
import icon5 from '../../images/icons/secondary-icon5.png';
import icon6 from '../../images/icons/secondary-icon6.png';
import icon7 from '../../images/icons/secondary-icon7.png';
import icon8 from '../../images/icons/secondary-icon8.png';
import icon9 from '../../images/icons/secondary-icon9.png';
import icon10 from '../../images/icons/secondary-icon10.png';

import bgImg from '../../images/secondary-bg.png'


function Secondary() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const onScroll = (event) => {
            if (event.deltaX !== 0) {
                container.scrollTop += event.deltaX;
                event.preventDefault();
            }
        };
        container.addEventListener('wheel', onScroll);

        return () => {
            container.removeEventListener('wheel', onScroll);
        };
    }, []);

    return (
        <div className="Secondary" ref={containerRef} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='iconsContainer1'>
                <div className='iconContainer1'>
                    <img src={icon1} alt="icon1" />
                    <div className='iconContainer1-1'>
                        <img src={icon2} alt="icon2" />
                        <img src={icon4} alt="icon4" />
                    </div>
                </div>
                <div className='iconContainer2'>
                    <div className='iconContainer2-1'>
                        <img src={icon3} alt="icon3" className='icon3' />
                        <img src={icon5} alt="icon5" />
                    </div>
                    <img src={icon4} alt="icon4" className='icon4Rotate' />
                </div>
                <img src={icon6} alt="icon6" className='iconContainer3' />
            </div>
            <div className='iconsContainer2'>
                <div className='iconContainer3'>
                    <div className='iconContainer3-1'>
                        <img src={icon7} alt="icon7" />
                        <img src={icon8} alt="icon8" />
                    </div>
                    <img src={icon9} alt="icon9" className='icon9' />
                </div>
                <div className='iconContainer4'>
                    <img src={icon4} alt="icon4" className='icon4-2' />
                    <p>
                        학교 안에서 <img src={icon10} alt="icon10" /><br />
                        나의 메이트 찾기!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Secondary;
