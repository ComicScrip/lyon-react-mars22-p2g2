import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/quizz">Quizz</Link>
      </nav>
    </header>
  );
}
