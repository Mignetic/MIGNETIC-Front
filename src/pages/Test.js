import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Question from '../components/Question';
import Footer from '../components/Footer';
import '../css/Test.css';
import bgImg from '../images/test-bg.png';
import testbox from '../images/icons/test-textbox.png';
import arrow from '../images/icons/test-arrow.png';

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';

    const location = useLocation();
    const { position1, position2, name, stuID, subject, relation } = location.state;

    let types;
    let dataToTest = {};
    if (position1 === 'school') {
        types = position2 === 'student' ? 'student' : 'teacher';
        dataToTest = {
            types,
            name
        };
        if (position2 === 'student') {
            dataToTest.stuID = stuID;
        } else if (position2 === 'teacher') {
            dataToTest.subject = subject;
        }
    } else if (position1 === 'outsider') {
        types = 'official'; 
        dataToTest = {
            types,
            name,
            relation
        };
    }

    return (
        <div>
            <Header position={'test'} />
            <div className="Test">
                <div className='testboxContainer'>
                    <img src={testbox} alt="testbox" />
                    <p>
                        학교 안에서 메이트를 찾자! <br />
                        10가지 질문의 답을 선택하고 <br />
                        🩷나의 유형 확인하기!🩷
                    </p>
                </div>
                <img src={arrow} className='arrowImg' alt="arrow" />
                <Question
                    types={types}
                    name={name}
                    stuID={stuID} // 학생인 경우에만 전달
                    subject={subject} // 선생님인 경우에만 전달
                    relation={relation} // 관계자인 경우에만 전달
                />
            </div>
            <Footer position={'test'} />
        </div>
    );
}

export default Test;
