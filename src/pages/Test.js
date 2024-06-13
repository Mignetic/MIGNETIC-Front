import '../css/Test.css'
import '../css/common/Index.css'

import bgImg from '../images/test-bg.png'
import testbox from '../images/icons/test-textbox.png'
import arrow from '../images/icons/test-arrow.png'

import Header from '../components/Header'
import Question from '../components/Question'
import Footer from '../components/Footer'

function Test() {
    document.body.style.backgroundImage = `url(${bgImg})`
    document.body.style.backgroundAttachment = 'scroll'
    document.body.style.backgroundSize = 'cover'

    return (
        <div>
            <Header position={'test'} />
            <div className="Test">
                <div className='testboxContainer'>
                    <img src={testbox} />
                    <p>
                        학교 안에서 메이트를 찾자! <br />
                        10가지 질문의 답을 선택하고 <br />
                        🩷나의 유형 확인하기!🩷
                    </p>
                </div>
                <img src={arrow} className='arrowImg' />
                <Question />
            </div>
            <Footer position={'test'}/>
        </div>
    )
}

export default Test