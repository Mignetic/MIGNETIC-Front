import React, { useState, useEffect } from 'react';
import Logo from '../images/icons/logo.png';
import letterImg from '../images/icons/letterImg.png';
import { useNavigate } from 'react-router-dom';
import '../css/NoticeBoard.css';

function NoticeBoard({ letters }) {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (letters.length > 0) {
            setShowPopup(true);
            const timer = setTimeout(() => setShowPopup(false), 3000); // 3초 후에 사라지게 설정
            return () => clearTimeout(timer);
        }
    }, [letters]);

    const ShowLetter = (vId) => {
        navigate(`/showletter?id=${vId}`);
        // alert("idd"+vId);
    };

    return (
        <div className="noticeBoardBackground">
            <div className="logoContainer">
                <img src={Logo} className="boardLogo" alt="로고" />
            </div>
            {showPopup && (
                <div className="letterPopup">
                    <img src={letterImg} alt="편지 이미지" className="popupImg" />
                </div>
            )}
            <div className="boardLetter">
                {letters.length > 0 ? (
                    letters.map((letter, index) => (
                        <div key={index} className='boardLetterImg'>
                            <div className='letterFront'>
                                <img src={letterImg} alt="편지 이미지" />
                            </div>
                            {/* <div className='letterBack' onClick={ShowLetter} onClick={() => ShowLetter("heeyeon")}> */}
                            <div className='letterBack' onClick={() => ShowLetter(letter.id)}>
                                <p className='leftP'>To. {letter.toName}</p>
                                <p className='rightP'>From. {letter.fromName}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="noLetters">편지가 없습니다.</p>
                )}
            </div>
        </div>
    );
}

export default NoticeBoard;
