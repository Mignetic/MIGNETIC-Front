import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import '../css/PositionInput.css'
import bgImg from '../images/testPosition-bg.png'
import btn from '../images/select-btn.png'

function PositionInput() {
    document.body.style.backgroundImage = `url(${bgImg})`
    const navigate = useNavigate()
    const location = useLocation()

    const position1 = location.state?.position1 || 'school'
    const type1 = ['school', 'outsider'].includes(position1) ? position1 : 'school'

    const position2 = location.state?.position2 || 'student'
    const type2 = ['student', 'teacher'].includes(position2) ? position2 : 'student'

    const inputPlaceholder = (type2) => {
        if (type2 === 'student') return '학년'
        else if (type2 === 'teacher') return '과목'
    }

    let types
    if (type1 === 'school') types = type2 === 'student' ? 'student' : 'teacher'
    else if (type1 === 'outsider') types = 'outsider'

    const [studentName, setStudentName] = useState('')
    const [studentSubject, setStudentSubject] = useState('')
    const [outsiderType, setOutsiderType] = useState('')
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false)

    const handleSubmit = () => {
        if (!studentName) {
            alert('이름을 작성해주세요.')
            return
        }
        if (type1 === 'school' && !studentSubject) {
            alert(inputPlaceholder(type2) + '을 작성해주세요.')
            return
        }
        if (type1 === 'outsider' && !outsiderType) {
            alert('외부인 유형을 선택해주세요.')
            return
        }
        if (!isPrivacyChecked) {
            alert('개인정보동의를 체크해주세요.')
            return
        }

        navigate('/test', { 
            state: { 
                types, 
                studentName, 
                studentSubject, 
                outsiderType, 
                isPrivacyChecked 
            } 
        })
    }
    
    return (
        <div>
            <Header position={'basic'} />
            <div className='PositionInput'>
                {
                    type1 === 'school' ? (
                        <div className="schoolInputContainer">
                            <input className='inputText' type="text" placeholder='이름' id='studentName' autoComplete="off" value={studentName}
                                onChange={(e) => setStudentName(e.target.value)} />
                            <input className='inputText' type="text" placeholder={inputPlaceholder(type2)} id='studentSubject' autoComplete="off" value={studentSubject}
                                onChange={(e) => setStudentSubject(e.target.value)} />
                        </div>
                    ) : type1 === 'outsider' ? (
                        <div className="outsiderInputContainer">
                            <input className='inputText' type="text" placeholder="이름" id='studentName' autoComplete="off" value={studentName}
                                onChange={(e) => setStudentName(e.target.value)} />

                            <div className='radioContainer'>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice1">부모님</label>
                                    <input type="radio" id="contactChoice1" name="contact" value="parent" onChange={(e) => setOutsiderType(e.target.value)} />
                                </div>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice2">지인</label>
                                    <input type="radio" id="contactChoice2" name="contact" value="friend" onChange={(e) => setOutsiderType(e.target.value)} />
                                </div>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice3">회사 관계자</label>
                                    <input type="radio" id="contactChoice3" name="contact" value="company" onChange={(e) => setOutsiderType(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className='privacyContainer'>
                    개인정보동의
                    <input className='inputCheck' type="checkbox" checked={isPrivacyChecked}
                        onChange={(e) => setIsPrivacyChecked(e.target.checked)} />
                </div>
                <button className='testSubmitBtn' onClick={handleSubmit}><img src={btn}/><p>검사하기</p></button>
            </div>
        </div>
    );
}

export default PositionInput;
