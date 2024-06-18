import React, { useState, useEffect } from 'react';
import NoticeBoard from '../components/NoticeBoard';
import bgImg from '../images/noticeBoard-bg2.png';

function Board() {
    const [letters, setLetters] = useState([]);

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
