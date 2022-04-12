import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

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
      {(toggleMenu || largeur > 500) && (
        <div className="liste">
          <NavLink
            className={'item'}
            to="../routes/Home"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Home
          </NavLink>
          <NavLink
            to="../routes/Quizz"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Quizz
          </NavLink>
          <NavLink
            to="../routes/Profil"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Profil
          </NavLink>
          <NavLink
            to="../routes/Home"
            style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}
          >
            Contact
          </NavLink>
        </div>
      )}
      <button onClick={toggleNavSmallScreen} type="button" className="btn">
        Btn
      </button>
    </nav>
  );
}
