/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import FilmContainer from '../components/FilmContainer';
import styles from '../components/Filter.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}

export default function Filterpage() {
  const [checked, setChecked] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  const handleChangeCheck = (event) => {
    setChecked(event.target.value);
  };
  const handleChangeReset = () => {
    setChecked('');
    setSearchParams('');
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/k_8kbcras1?user_rating=,3.0&${searchParams}`,
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
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    genres: e.target.value,
                  })
                }
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
            <div className={styles.filterFond}>
              {' '}
              <div
                value={searchParams.get('certificates') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    certificates: e.target.value,
                  })
                }
              >
                {['G', 'PG', 'PG-13', 'R', 'NC-17'].map((certificates) => (
                  <div key={certificates}>
                    <label htmlFor={certificates}>
                      <input
                        type="radio"
                        value={`us:${certificates}`}
                        name="certificates"
                        id={certificates}
                        checked={
                          checked === `us:${certificates}` ||
                          searchParams.get('certificates') ===
                            `us:${certificates}`
                        }
                        onChange={handleChangeCheck}
                      />
                      <span style={{ color: 'black' }}>{certificates}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
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
          {results.map((resultApi) => (
            <FilmContainer resultApi={resultApi} key={resultApi.id} />
          ))}
        </section>
      </div>
    </div>
  );
}
