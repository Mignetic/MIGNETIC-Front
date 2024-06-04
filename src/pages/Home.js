import React, { useEffect } from 'react';
import '../css/common/Index.css';
import '../css/Home.css';
import '../css/common/Animation.css';

import Main from '../components/homes/Main';
import Secondary from '../components/homes/Secondary';
import Last from '../components/homes/Last';

function Home() {
    useEffect(() => {
        let isScrolling = false;

        const handleScroll = (event) => {
            if (isScrolling) return;
            isScrolling = true;
            event.preventDefault();

            const { deltaY } = event;
            const activeElement = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('.snap-section');
            let nextElement;

            if (deltaY > 0) {
                // Down scroll
                nextElement = activeElement.nextElementSibling;
            } else {
                // Up scroll
                nextElement = activeElement.previousElementSibling;
            }

            if (nextElement) {
                nextElement.scrollIntoView({ behavior: 'smooth' });
            }

            setTimeout(() => {
                isScrolling = false;
            }, 500);
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="HomeContainer">
            <div className="snap-section"><Main /></div>
            <div className="snap-section"><Secondary /></div>
            <div className="snap-section"><Last /></div>
        </div>
    );
}

export default Home;
