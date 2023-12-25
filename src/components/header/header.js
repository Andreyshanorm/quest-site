
import { NavLink } from 'react-router-dom';

function Header() {
  return(
    <header className="footer">
        <nav className="navigation">
            <ul className="nav__list">
                <li className="nav-list__item">
                    <NavLink to="/" className="nav-list__link">
                        <p className="nav-list-item__title">Beginning</p>
                    </NavLink>
                </li>
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
        </nav>
  </header>
);
  }
  
  export default Header;