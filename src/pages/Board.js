import Logo from '../images/icons/logo.png';import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticeBoard from '../components/NoticeBoard';
import bgImg from '../images/noticeBoard-bg2.png';

function Board() {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        setInterval(()=>{fetchLetters()},1000);
    }, []);

    const fetchLetters = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/letter/letters');
            setLetters(response.data);
        } catch (error) {
            console.error('Error fetching letters:', error);
        }
    };

    // 배경 이미지 설정
    document.body.style.backgroundImage = `url(${bgImg})`;

    return (
        <div className="board-container">
            <NoticeBoard letters={letters} />
        </div>
    );
}

export default Board;
