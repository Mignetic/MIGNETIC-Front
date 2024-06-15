import React, { useState, useEffect } from 'react';
import NoticeBoard from '../components/NoticeBoard';
import bgImg from '../images/noticeBoard-bg2.png';
import axios from 'axios';

function Board() {
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        // 편지 데이터 조회 함수
        const fetchLetters = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/letters');
                setLetters(response.data); // 받아온 편지 데이터를 상태에 설정
            } catch (error) {
                console.error('편지 데이터 조회 오류:', error);
            }
        };

        fetchLetters(); // useEffect에서 바로 호출하여 컴포넌트가 마운트될 때 데이터를 가져옵니다.
    }, []);

    // 배경 이미지 설정
    document.body.style.backgroundImage = `url(${bgImg})`;

    return (
        <div>
            <NoticeBoard>
                {letters.map((letter, index) => (
                    <div key={index}>
                        <p><strong>보낸 사람:</strong> {letter.fromName}</p>
                        <p><strong>받는 사람:</strong> {letter.toName}</p>
                        <p><strong>내용:</strong> {letter.content}</p>
                        <hr />
                    </div>
                ))}
            </NoticeBoard>
        </div>
    );
}

export default Board;
