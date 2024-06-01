import React, { useEffect } from 'react';
import '../css/common/Index.css'
import '../css/Home.css'
import '../css/common/Animation.css'

import Main from '../components/homes/Main'
import Secondary from '../components/homes/Secondary'
import Last from '../components/homes/Last'
import Footer from '../components/Footer'

function Home() {
    useEffect(() => {
        let isScrolling = false;

        const handleScroll = (event) => {
            if (isScrolling) return
            isScrolling = true
            event.preventDefault()

            const { deltaY } = event;
            const activeElement = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
            let nextElement;

            if (deltaY > 0) {
                nextElement = activeElement.nextElementSibling
            } else {
                nextElement = activeElement.previousElementSibling
            }

            if (nextElement) {
                nextElement.scrollIntoView({ behavior: 'smooth' })
            }

            setTimeout(() => {
                isScrolling = false
            }, 1000)
        }

        window.addEventListener('wheel', handleScroll, { passive: false })

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [])

    return (
        <div className="HomeContainer">
            <Main />
            <Secondary />
            <Last />
            <Footer position='home' />
        </div>
    );
}

export default Home;
