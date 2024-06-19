import React, { useState } from 'react';
import LetterContents from "../components/LetterContents";
import bgImg from '../images/noticeBoard-bg2.png';
import '../css/ShowLetter.css'; // ShowLetter.css 파일을 import 합니다.

function ShowLetter() {
    const [showBackground, setShowBackground] = useState(true); // 배경 이미지 표시 여부를 상태로 관리

    // 조건부로 배경 이미지 설정
    const backgroundStyle = showBackground ? { backgroundImage: `url(${bgImg})` } : {};

    return (
        <div className="show-letter-container" style={backgroundStyle}>
            <div className="letter-contents">
                <LetterContents />
            </div>
        </div>
    );
}

export default ShowLetter;
