import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import Quizz from '../routes/Quizz';
import Profil from '../routes/Profil';
import Filterpage from '../routes/Filterpage';
import Results from '../routes/Results';
import DetailPage from '../routes/DetailPage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quizz" element={<Quizz />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/filterpage" element={<Filterpage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
    </main>
  );
}
