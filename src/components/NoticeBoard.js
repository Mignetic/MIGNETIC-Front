import React, { useState, useEffect } from 'react';
import Logo from '../images/icons/logo.png';
import letterImg from '../images/icons/letterImg.png';
import { useNavigate } from 'react-router-dom';
import '../css/NoticeBoard.css';

function NoticeBoard() {
    const navigate = useNavigate();
    const [latestLetter, setLatestLetter] = useState(null);

    useEffect(() => {
        fetchLatestLetter();
    }, []);

    const fetchLatestLetter = () => {
        fetch('http://localhost:3000/api/letter-board/latest')
            .then(response => response.json())
            .then(data => {
                setLatestLetter(data);
            })
            .catch(error => {
                console.error('최신 편지 가져오기 실패:', error);
            });
    };

    const ShowLetter = () => {
        navigate('/showletter');
    };

    return (
        <div className="noticeBoardBackground">
            <div className="logoContainer">
                <img src={Logo} className="boardLogo" alt="로고" />
            </div>
            <div className="boardLetter">
                {latestLetter ? (
                    <div className='boardLetterImg'>
                        <div className='letterFront'><img src={letterImg} alt="편지 이미지" /></div>
                        <div className='letterBack' onClick={ShowLetter}>
                            <p className='leftP'>To.{latestLetter.toName}</p>
                            <p className='rightP'>from.{latestLetter.fromName}</p>
                        </div>
                    </div>
                ) : (
                    <p>최신 편지가 없습니다.</p>
                )}
            </div>
        </div>
    );
}

export default NoticeBoard;
