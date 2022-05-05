import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';
import './footer.css';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <NavLink className={'content'} to="/nanarmates">
          Nanar Mates
        </NavLink>
        <NavLink className={'content'} to="/Contact">
          Contact
        </NavLink>
      </div>
      <div className="logo-content">
        <div className="webName">Nanar Production</div>
        <div className="logo">
          <img src={logo} alt="logo" className={'logo'} />
        </div>
      </div>
    </div>
  );
}
