import './Main.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import Quizz from '../routes/Quizz';
import Profil from '../routes/Profil';
import Filterpage from '../routes/Filterpage';
import Results from '../routes/Results';
import DetailPage from '../routes/DetailPage';
import { FavoriteContextProvider } from '../contexts/favoriteContext';
import { ResultsContextProvider } from '../contexts/resultsContext';

export default function Main() {
  return (
    <main className="mainBodyContainer">
      <ResultsContextProvider>
        <FavoriteContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quizz" element={<Quizz />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/filterpage" element={<Filterpage />} />
            <Route path="/results/" element={<Results />} />
            <Route path="/detailpage/:id" element={<DetailPage />} />
          </Routes>
        </FavoriteContextProvider>
      </ResultsContextProvider>
    </main>
  );
}
