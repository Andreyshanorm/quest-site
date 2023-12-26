import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo-rackext-svgrepo-com.svg'
import telephoneIcon from './phone-svgrepo-com.svg'
import messageIcon from './message-left-svgrepo-com.svg'



import './header.css'


function Header() {
    const messageBtn = useRef();
    
    
    useEffect(()=>{
        const messageBatton = messageBtn.current;
        messageBatton.addEventListener('click', ()=>{
            console.log('clocked');
        })
    })



  return(
    <header className="header">
        <nav className="navigation">
            <div className="nav-list__logo">
                <NavLink to="/" className="nav-list__link-logo">
                    <img src={logo} alt="" />
                </NavLink>
            </div>
            <ul className="nav__list">
                <li className="nav-list__item">
                    <NavLink to="/about" className="nav-list__link">
                        <p className="nav-list-item__title">Об игре</p>
                    </NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="/booking" className="nav-list__link">
                        <p className="nav-list-item__title">Забронировать</p>
                    </NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="/certificate" className="nav-list__link">
                        <p className="nav-list-item__title">Сертификат</p>
                    </NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="/location" className="nav-list__link">
                        <p className="nav-list-item__title">Где находится</p>
                    </NavLink>
                </li>
            </ul>
            <div className="callback-block">
                <div className="callback-block__item telephone">
                    <img src={telephoneIcon} alt="" />
                </div>
                <div ref={messageBtn} className="callback-block__item message">
                    <img src={messageIcon} alt="" />
                </div>
            </div>
        </nav>
  </header>
);
  }
  
  export default Header;