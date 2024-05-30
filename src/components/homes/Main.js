
import logo from '../../images/icons/home-logo.png'
import bgImg from '../../images/home-bg.png'
import arrow from '../../images/icons/home-arrow.png'

function Main() {
    return (
        <div className='Main' style={{ backgroundImage: `url(${bgImg})` }}>
            <img src={logo} className='mainLogo' />
            <img src={arrow} className='mainarrow' />
        </div>
    )
}

export default Main