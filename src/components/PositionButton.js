import { useNavigate } from 'react-router-dom'

import '../css/PositionSelect.css'
import btn from '../images/select-btn.png'

import '../css/common/Index.css'

function PositionSelect() {
    const navigate = useNavigate()

    const handleOnclilckPosition = (position1, position2) => {
        navigate('/positioninput', { state: { position1, position2 } })
    }

    return (
        <div className='PositionSelect'>
            <div className='PositionSelectContainer'>
                <div className='PositionSelectTitle'>
                    <p className='selectTitle'>SELECT</p>
                    맞는 포지션을 선택해주세요
                </div>

                <div className='selectContainer'>
                    <button className='selectBtn' onClick={() => { handleOnclilckPosition('school', 'student') }}><img src={btn} /><p>학생</p></button>
                    <button className='selectBtn' onClick={() => { handleOnclilckPosition('school', 'teacher') }}><img src={btn} /><p>선생님</p></button>
                    <button className='selectBtn' onClick={() => { handleOnclilckPosition('outsider') }}><img src={btn} /><p>외부인</p></button>
                </div>
            </div>
        </div>
    )
}

export default PositionSelect