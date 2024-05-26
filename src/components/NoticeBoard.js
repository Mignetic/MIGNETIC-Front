import Logo from '../images/icons/logo.png'
import letterImg from '../images/icons/letterImg.png'

import '../css/NoticeBoard.css'

import { useNavigate } from 'react-router-dom'


function NoticeBoard() {

    const navigate = useNavigate();

    const ShowLetter = () =>{

        navigate('/showletter')

    }

    // 보낸 사람, 편지 내용, 받는 사람 배열 코드

    return (
        <div class="noticeBoardBackground">
            <div class="logoContainer"><img src={Logo} class=".boardLogo"/></div>
            <div class="boardLetter">
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack' onClick={ShowLetter}><p className='leftP'>To.승주</p><p className='rightP'>from.승주</p></div>
                </div>

                {/* 이거는 서버 요청 오면 편지 그리는 코드 */}
                {/* {letters.map((letter, index) => (
                    <div key={index} className='boardLetterImg'>
                        <div className='letterFront'>
                        <img src={letterImg} alt="Letter Front" />
                        </div>
                        <div className='letterBack'>
                        <p className='leftP'>To.{letter.to}</p>
                        {letter.from && <p className='rightP'>from.{letter.from}</p>}
                        </div>
                    </div>
                ))} */}
            </div>
            
        </div>        
    )
   
}

export default NoticeBoard