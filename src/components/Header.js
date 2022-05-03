import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <div>
        <img src={logo} alt="logo" className={'item'} />
      </div>
      {(toggleMenu || largeur > 500) && (
        <div className="liste">
          <NavLink
            className={'items'}
            to="/"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Home
          </NavLink>
          <NavLink
            className={'items'}
            to="/Quizz"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Quizz
          </NavLink>
          <NavLink
            className={'items'}
            to="/Nanarmate"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Nanar Mate
          </NavLink>
          <NavLink
            className={'items'}
            to="/Contact"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
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
