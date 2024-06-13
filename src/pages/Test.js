import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Test.css';
import '../css/common/Index.css';

import bgImg from '../images/test-bg.png';
import testbox from '../images/icons/test-textbox.png';
import arrow from '../images/icons/test-arrow.png';

import Header from '../components/Header';
import Question from '../components/Question';
import Footer from '../components/Footer';

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundAttachment = 'scroll';
    document.body.style.backgroundSize = 'cover';

    const location = useLocation();
    const { types, studentName, studentSubject, outsiderType, isPrivacyChecked } = location.state || {};

    const handleAnswersSubmitted = (answers) => {
        console.log('Selected Answers:', answers);
    };

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
                    studentName={studentName}
                    studentSubject={studentSubject}
                    outsiderType={outsiderType}
                    isPrivacyChecked={isPrivacyChecked}
                    onAnswersSubmitted={handleAnswersSubmitted}
                />
            </div>
            <Footer position={'test'} />
        </div>
    );
}

export default Test;
