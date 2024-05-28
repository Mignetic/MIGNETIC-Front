import React from 'react'
import '../css/common/Header.css'

import { Link } from 'react-router-dom'

import Logo from '../images/icons/logo.png'

function Header({ position }) {
    const type = ['test', 'basic'].includes(position) ? position : 'basic'

    return (
        <div className="Header">
            <div className="headerContainer">
                <nav>
                    <ul>
                        <li><Link to='/'><img src={Logo} alt="로고" /></Link></li>
                        <div className={`liContainer ${type}`}>
                            <li className='liNav1'><Link to='/testselect'>검사하기</Link></li>
                            <li className='liNav2'><Link to='/hotplace'>핫플보기</Link></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header