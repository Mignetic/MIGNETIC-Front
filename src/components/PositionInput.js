import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import '../css/PositionInput.css';
import bgImg from '../images/testPosition-bg.png';
import btn from '../images/select-btn.png';
import heartIcon from '../images/icons/heart.svg'; // Path to your heart icon image


function PositionInput() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const navigate = useNavigate();
    const location = useLocation();

    const position1 = location.state?.position1 || 'school';
    const type1 = ['school', 'outsider'].includes(position1) ? position1 : 'school';

    // Set default position2 based on position1
    const position2 = type1 === 'school' ? (location.state?.position2 || 'student') : 'official';
    const type2 = ['student', 'teacher', 'official'].includes(position2) ? position2 : 'student';

    const inputPlaceholder = (type2) => {
        if (type2 === 'student') return '학번';
        else if (type2 === 'teacher') return '과목';
        else if (type2 === 'official') return '관계';
    };

    const [name, setName] = useState('');
    const [subjectOrGrade, setSubjectOrGrade] = useState('');
    const [relation, setRelation] = useState(''); // Initialize relation state
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    const handleRelationChange = (e) => {
        setRelation(e.target.value); // Update relation state on radio button change
    };

    const handleSubmit = () => {
        if (!name) {
            alert('이름을 작성해주세요.');
            return;
        }
        if (type1 === 'school' && !subjectOrGrade) {
            alert(inputPlaceholder(type2) + '을 작성해주세요.');
            return;
        }
        if (type1 === 'outsider' && !relation) {
            alert('외부인 유형을 선택해주세요.');
            return;
        }
        if (!isPrivacyChecked) {
            alert('개인정보동의를 체크해주세요.');
            return;
        }

        // 데이터 전송
        let dataToTest = {
            position1,
            position2: type2, // Use type2 which is 'official' for outsiders
            name
        };

        if (type2 === 'student') {
            dataToTest.stuID = subjectOrGrade;
        } else if (type2 === 'teacher') {
            dataToTest.subject = subjectOrGrade;
        } else if (type2 === 'official') {
            dataToTest.relation = relation;
        }

        navigate('/test', { state: dataToTest });
    };

    return (
        <div>
            <Header position={'basic'} />
            <div className='PositionInput'>
                {type1 === 'school' ? (
                    <div className='schoolInputContainer'>
                        <input
                            className='inputText'
                            type='text'
                            placeholder='이름'
                            autoComplete='off'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className='inputText'
                            type='text'
                            placeholder={inputPlaceholder(type2)}
                            autoComplete='off'
                            value={subjectOrGrade}
                            onChange={(e) => setSubjectOrGrade(e.target.value)}
                        />
                    </div>
                ) : type1 === 'outsider' ? (
                    <div className='outsiderInputContainer'>
                        <input
                            className='inputText'
                            type='text'
                            placeholder='이름'
                            autoComplete='off'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <div className='radioContainer'>
                            <div>
                                <label className='radioLabel' htmlFor='contactChoice1'>
                                    부모님
                                </label>
                                <input
                                    type='radio'
                                    id='contactChoice1'
                                    name='contact'
                                    value='parent'
                                    onChange={handleRelationChange}
                                    checked={relation === 'parent'}
                                />
                            </div>
                            <div>
                                <label className='radioLabel' htmlFor='contactChoice2'>
                                    지인
                                </label>
                                <input
                                    type='radio'
                                    id='contactChoice2'
                                    name='contact'
                                    value='friend'
                                    onChange={handleRelationChange}
                                    checked={relation === 'friend'}
                                />
                            </div>
                            <div>
                                <label className='radioLabel' htmlFor='contactChoice3'>
                                    회사 관계자
                                </label>
                                <input
                                    type='radio'
                                    id='contactChoice3'
                                    name='contact'
                                    value='company'
                                    onChange={handleRelationChange}
                                    checked={relation === 'company'}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className='privacyContainer'>
                    개인정보동의
                    <label className='checkboxContainer'>
                        <input
                            className='inputCheck'
                            type='checkbox'
                            checked={isPrivacyChecked}
                            onChange={(e) => setIsPrivacyChecked(e.target.checked)}
                        />
                        <span className='checkmark'>
                            {isPrivacyChecked && <img src={heartIcon} alt='heart icon' className='heartIcon' />}
                        </span>
                    </label>
                </div>
                <button className='testSubmitBtn' onClick={handleSubmit}>
                    <img src={btn} alt='select button' />
                    <p>검사하기</p>
                </button>
            </div>
        </div>
    );
}

export default PositionInput;
