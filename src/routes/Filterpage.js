/* eslint-disable operator-linebreak */
import FilmContainer from '../components/FilmContainer';
import styles from '../components/Filter.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

require('dotenv').config();

export default function Filterpage() {
  const [checked, setChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrayApi, setArrayApi] = useState([]);

  const handleChangeCheck = (event) => {
    setChecked(event.target.value);
  };
  const handleChangeReset = () => {
    setChecked('');
    setSearchParams('');
  };

  useEffect(() => {
    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${process.env.FILTER_API_KEY}?user_rating=,3.0&${searchParams}`
      )
      .then((res) => res.data)
      .then((data) => {
        setArrayApi(data.results);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, [searchParams]);

  return (
    <div>
      <div className={styles.title}>
        <h1>FILTRES</h1>
      </div>
      <div className={styles.firstContainer}>
        <section className={styles.filterGridContainer}>
          <div className={styles.filterContainer}>
            <h2>Année de sortie</h2>
            <div className={styles.filterFond}>...</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Catégorie</h2>
            <div className={styles.filterFond}>
              <div
                value={searchParams.get('genres') || ''}
                onChange={(e) => setSearchParams({ genres: e.target.value })}
              >
                {[
                  'action',
                  'comedy',
                  'drama',
                  'fantasy',
                  'horror',
                  'romance',
                  'sci-fi',
                  'thriller',
                  'western',
                ].map((genres) => (
                  <div key={genres}>
                    <label htmlFor={genres}>
                      <input
                        type="radio"
                        value={genres}
                        name="genres"
                        id={genres}
                        checked={
                          checked === genres ||
                          searchParams.get('genres') === genres
                        }
                        onChange={handleChangeCheck}
                      />
                      <span style={{ color: 'black' }}>{genres}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Restriction d'âge</h2>
            <div className={styles.filterFond}>...</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Pays</h2>
            <div className={styles.filterFond}>...</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Rating</h2>
            <div className={styles.filterFond}>...</div>
          </div>
          <div className={styles.filterContainerReinitialiser}>
            <p onClick={handleChangeReset}>Réinitialiser les filtres</p>
          </div>
        </section>
        <section className={styles.filmGridContainer}>
          {arrayApi.map((resultApi) => (
            <FilmContainer resultApi={resultApi} key={resultApi.id} />
          ))}
        </section>
      </div>
    </div>
  );
}
