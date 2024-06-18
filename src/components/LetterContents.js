// 수정된 클라이언트 측 코드

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/LetterContents.css';
import Logo from '../images/icons/logo.png';

function LetterContents() {
    const navigate = useNavigate();
    const [letterData, setLetterData] = useState({
        toName: '',
        fromName: '',
        letterContent: ''
    });

    useEffect(() => {
        fetchLetterContent();
    }, []);

    const fetchLetterContent = async () => {
        try {
            
            const response = await axios.get(`http://localhost:3000/api/letter/lastLetter`);
            console.log("AA",response);
            setLetterData({
                toName: response.data.toName,
                fromName: response.data.fromName,
                letterContent: response.data.content
            });

        } catch (error) {
            console.error('편지 내용을 가져오는 중 오류 발생:', error);
            // 오류 처리 로직 추가
        }
    };

    const backBoardLetters = () => {
        navigate('/Board');
    };

    return (
        <div className="contentBackground">
            <div className="logoContainer">
                <img src={Logo} alt="Logo" className="boardLogo" />
            </div>
            <div className="letterContentsPaper">
                <div className="letterTo">To. {letterData.toName}</div>
                <div className="letterContents">{letterData.letterContent}</div>
                <div className="letterFrom">From. {letterData.fromName}</div>
            </div>
            <button className="backBoard" onClick={backBoardLetters}>
                <p>이전 화면</p>
            </button>
        </div>
    );
}

export default LetterContents;
