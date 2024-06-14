import logo from '../images/icons/footer-logo.png'
import gihubIcon from '../images/icons/footer-github.png'

import '../css/common/Footer.css'

function Footer({ position }) {
    const type = ['home', 'test', 'result'].includes(position) ? position : 'test'

    let footerClassName = ''
    if (type === 'home') footerClassName = 'homeContainer'
    else if (type === 'test') footerClassName = 'testContainer'
    else if (type === 'result') footerClassName = 'resultContainer'

    return (
        <div className={`Footer ${footerClassName}`}>
            {
                type === 'test' && (
                    <div className='footerLogoContainer'>
                        <img src={logo} />
                    </div>
                )
            }
            <div className={`footerTest ${footerClassName}`}>
                <div className={`footerTestFont ${footerClassName}`}>
                    MIRIM MEISTER HIGH SHCOOL<br />
                    <br />
                    TEAM [ PEPPER ]<br />
                    DESIGN | 방윤서 유희주<br />
                    FRONT &nbsp;| 김수연 양지아 유희주<br />
                    BACK &nbsp;&nbsp;&nbsp;&nbsp;| 권지수 노승주 방윤서<br />
                </div>
                <div className='footerTestImg'>
                    <img src={gihubIcon} />
                </div>
            </div>
        </div>
    )
}

export default Footer