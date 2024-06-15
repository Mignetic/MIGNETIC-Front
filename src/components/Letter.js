import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Letter.css';
import envelope from '../images/envelope.png';

function LetterWrite() {
    const { graphName } = useParams();
    const [toName, setToName] = useState(graphName || '');
    const [fromName, setFromName] = useState('');
    const [letterContent, setLetterContent] = useState('');

    useEffect(() => {
        setToName(graphName);
    }, [graphName]);

    const handleTransmission = () => {
        if (window.confirm("편지를 전송하시겠습니까?")) {
            axios.post('http://localhost:3001/api/letter', { toName, fromName, letterContent })
                .then(response => {
                    alert("전송 완료!");
                    console.log(response.data);
                    setToName('');
                    setFromName('');
                    setLetterContent('');
                })
                .catch(error => {
                    console.error('편지 저장 오류:', error);
                    alert("전송 실패!");
                });
        }
    };

    return (
        <div className='Letter-background'>
            <div className='letterPaper'>
                <div className='name'>To. {toName}</div>
                <input
                    type='text'
                    value={toName}
                    onChange={(e) => setToName(e.target.value)}
                    placeholder="받는 사람 이름"
                />
                <input
                    type='text'
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    placeholder="보내는 사람 이름"
                />
                <textarea
                    className='letterInputText'
                    value={letterContent}
                    onChange={(e) => setLetterContent(e.target.value)}
                    placeholder="여기에 편지를 써요"
                ></textarea>
                <button className='letterbtn' onClick={handleTransmission}>
                    전송하기
                </button>
            </div>
            <div className='envelope'>
                <img src={envelope} alt='envelope'></img>
            </div>
        </div>
    );
}

export default LetterWrite;
