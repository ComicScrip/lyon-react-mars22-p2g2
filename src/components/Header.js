import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../image/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="logoContainer">
        <Link to="/">
          <img src={logo} alt="logo" className={'item'} />
        </Link>
      </div>
      {(toggleMenu || largeur > 700) && (
        <div className="liste">
          <NavLink
            className={'items'}
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
            onClick={toggleNavSmallScreen}
          >
            HomePage
          </NavLink>
          <NavLink
            className={'items'}
            to="/Quizz"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
            onClick={toggleNavSmallScreen}
          >
            Quick Navet
          </NavLink>
          <NavLink
            className={'items'}
            to="/filterpage"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
            onClick={toggleNavSmallScreen}
          >
            Rechercher &nbsp; <span className="desktopText">un navet</span>
          </NavLink>
          <NavLink
            className={'items'}
            to="/Contact"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
            onClick={toggleNavSmallScreen}
          >
            Contact
          </NavLink>
        </div>
      )}
      {toggleMenu ? (
        <AiOutlineClose className="btn2" onClick={toggleNavSmallScreen} />
      ) : (
        <GiHamburgerMenu className="btn" onClick={toggleNavSmallScreen} />
      )}
    </nav>
  );
}
