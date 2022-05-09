/* eslint-disable operator-linebreak */
import styles from './nanarmate.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NanarFormulaire() {
  const [name, setName] = useState('');
  const [dateForm, setDateForm] = useState('');
  const [results, setResults] = useState([]);
  const [movieForm, SetMovieForm] = useState('');
  const [localisationForm, setLocalisationForm] = useState('');
  const [timeForm, setTimeForm] = useState('');
  const notify = () =>
    toast('Parfait ! tu es prêt à trouver ton Nanar Mate ! 🎉 ', {
      position: toast.POSITION.BOTTOM_CENTER,
    });

  const apiKey = process.env.REACT_APP_NANARFORM_APIKEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('', {
        userName: name,
        movieName: movieForm,
        location: localisationForm,
        date: dateForm,
      })
      .then((res) => res.data)
      .then(setName(''))
      .then(setDateForm(''))
      .then(setLocalisationForm(''))
      .then(setTimeForm(''))
      .finally(SetMovieForm(''));
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${apiKey}?count=20&user_rating=,3.0`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => res.data)
      .then((data) => {
        setResults(data.results);
      })
      .catch((err) => {
        console.error(err.response.data);
      });

    return () => {
      source.cancel('Component got unmounted');
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formulaire}>
        <h1>Formulaire</h1>
        <label htmlFor="name">
          <p className={styles.items}>Name</p>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="MovieList" className={styles.items}>
          Film
          <select
            className={styles.input}
            onChange={(e) => SetMovieForm(e.target.value)}
            value={movieForm}
            required
          >
            <option key={''} value={''}>
              &nbsp;
            </option>
            {results.map((movie) => (
              <option key={movie.id} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Localisation" className={styles.items}>
          Localisation
          <select
            className={styles.input}
            onChange={(e) => setLocalisationForm(e.target.value)}
            value={localisationForm}
            required
          >
            <option key={''} value={''}>
              &nbsp;
            </option>
            <option value="Place Bellecour">Lyon 5éme</option>
            <option value="La Guillotiere">Lyon 6éme</option>
            <option value="La Part-dieu">Lyon 7éme</option>
            <option value="Confluence">Lyon 8éme</option>
          </select>
        </label>
        <label htmlFor="Date" className={styles.items}>
          Date
          <input
            className={styles.input}
            type="Date"
            onChange={(e) => setDateForm(e.target.value)}
            value={dateForm}
            required
          />
        </label>
        <label htmlFor="Date" className={styles.items}>
          Heure
          <input
            className={styles.input}
            type="Time"
            onChange={(e) => setTimeForm(e.target.value)}
            value={timeForm}
            required
          />
        </label>
        <button type="submit" onClick={notify} className={styles.btn}>
          Soumettre
        </button>
        <ToastContainer />
      </div>
    </form>
  );
}

export default NanarFormulaire;
