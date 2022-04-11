import './header.css';

export default function Header() {
  return (
    <nav>
      <ul className="liste">
        <li className="items">Home</li>
        <li className="items">Profil</li>
        <li className="items">Quizz</li>
        <li className="items">Contact</li>
      </ul>
      <button type="button" className="btn">
        btn
      </button>
    </nav>
  );
}
