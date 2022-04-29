/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import FilmContainer from '../components/FilmContainer';
import styles from '../components/Filter.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const apiKey = process.env.REACT_APP_FILTER_APIKEY;

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => {
    res[key] = value;
  });
  return res;
}
export default function Filterpage() {
  const anneeSortieList = [
    { name: 'Avant 1960', value: ',1960-01-01', id: 'b1960' },
    {
      name: 'Entre 1961 et 1980',
      value: '1961-01-01,1980-01-01',
      id: '60to80',
    },
    {
      name: 'Entre 1981 et 2000',
      value: '1981-01-01,2000-01-01',
      id: '80to00',
    },
    {
      name: 'Entre 2001 et 2010',
      value: '2001-01-01,2010-01-01',
      id: '00to10',
    },
    { name: "Entre 2011 et aujourd'hui", value: '2011-01-01,', id: '10today' },
  ];

  const restrictionAgeList = [
    { name: 'Tout public', value: 'us:G', id: 'g' },
    { name: 'Accompagnement parental souhaitable', value: 'us:PG', id: 'pg' },
    {
      name: 'Accompagnement fortement recommandé',
      value: 'us:PG-13',
      id: 'pg13',
    },
    {
      name: 'Accompagnement nécessaire pour les -18 ans',
      value: 'us:R',
      id: 'r',
    },
    { name: 'Interdit aux -18 ans', value: 'us:NC-17', id: 'nc17' },
  ];

  const countriesList = [
    { name: 'Afrique du Sud', value: 'za', id: 'afriquesud' },
    { name: 'Brésil', value: 'br', id: 'bresil' },
    {
      name: 'Chine',
      value: 'ch',
      id: 'chine',
    },
    { name: 'Espagne', value: 'es', id: 'espagne' },
    {
      name: 'Etat Unis',
      value: 'us',
      id: 'etatunis',
    },
    { name: 'France', value: 'fr', id: 'france' },
    { name: 'Hong Kong', value: 'hk', id: 'hongkong' },
    { name: 'Inde', value: 'in', id: 'inde' },
    { name: 'Japon', value: 'jp', id: 'japon' },
    { name: 'Mexique', value: 'mx', id: 'mexique' },
    { name: 'Russie', value: 'ru', id: 'russie' },
    { name: 'Thailande', value: 'th', id: 'thailande' },
    { name: 'Turquie', value: 'tr', id: 'turquie' },
  ];

  const ratingList = [
    { name: 'Moins de 1 étoile', value: ',1.0', id: '1star' },
    { name: 'De 1 à 2 étoiles', value: '1.0,2.0', id: '1to2' },
    {
      name: 'De 2 à 3 étoiles',
      value: '2.0,3.0',
      id: '2to33',
    },
  ];

  const [checked, setChecked] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  const [isLoading, setLoading] = useState(true);

  const handleChangeCheck = (event) => {
    setChecked(event.target.value);
  };
  const handleChangeReset = () => {
    setChecked('');
    setSearchParams('');
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    setLoading(true);
    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${apiKey}?count=20&user_rating=,3.0&${searchParams}`,
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
      })
      .finally(() => setLoading(false));

    return () => {
      source.cancel('Component got unmounted');
    };
  }, [searchParams]);

  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles.h1title}>FILTRES</h1>
      </div>
      <div className={styles.firstContainer}>
        <section className={styles.filterGridContainer}>
          <div className={styles.filterContainer}>
            <h2 className={styles.h2title}>Année de sortie</h2>
            <div className={styles.filterFond}>
              <div
                value={searchParams.get('release_date') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    release_date: e.target.value,
                  })
                }
              >
                {anneeSortieList.map((year) => (
                  <div key={year.id}>
                    <label htmlFor={year.id}>
                      <input
                        type="radio"
                        value={year.value}
                        name="year"
                        id={year.id}
                        checked={
                          checked === year.value ||
                          searchParams.get('release_date') === year.value
                        }
                        onChange={handleChangeCheck}
                      />
                      <span
                        style={{
                          color: 'black',
                          padding: '10px',
                          fontSize: '13pt',
                        }}
                      >
                        {year.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h2 className={styles.h2title}>Catégorie</h2>
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
                      <span
                        style={{
                          color: 'black',
                          padding: '10px',
                          fontSize: '13pt',
                        }}
                      >
                        {genres}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h2 className={styles.h2title}>Restriction d'âge</h2>
            <div className={styles.filterFond}>
              <div
                value={searchParams.get('certificates') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    certificates: e.target.value,
                  })
                }
              >
                {restrictionAgeList.map((certificates) => (
                  <div key={certificates.id}>
                    <label htmlFor={certificates.id}>
                      <input
                        type="radio"
                        value={certificates.value}
                        name="certificates"
                        id={certificates.id}
                        checked={
                          checked === certificates.value ||
                          searchParams.get('certificates') ===
                            certificates.value
                        }
                        onChange={handleChangeCheck}
                      />
                      <span
                        style={{
                          color: 'black',
                          padding: '10px',
                          fontSize: '13pt',
                        }}
                      >
                        {certificates.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h2 className={styles.h2title}>Pays</h2>
            <div className={styles.filterFond}>
              <div
                value={searchParams.get('countries') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    countries: e.target.value,
                  })
                }
              >
                {countriesList.map((countries) => (
                  <div key={countries.id}>
                    <label htmlFor={countries.id}>
                      <input
                        type="radio"
                        value={countries.value}
                        name="countries"
                        id={countries.id}
                        checked={
                          checked === countries.value ||
                          searchParams.get('countries') === countries.value
                        }
                        onChange={handleChangeCheck}
                      />
                      <span
                        style={{
                          color: 'black',
                          padding: '10px',
                          fontSize: '13pt',
                        }}
                      >
                        {countries.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h2 className={styles.h2title}>Rating</h2>
            <div className={styles.filterFond}>
              <div
                value={searchParams.get('user_rating') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    user_rating: e.target.value,
                  })
                }
              >
                {ratingList.map((userRating) => (
                  <div key={userRating.id}>
                    <label htmlFor={userRating.id}>
                      <input
                        type="radio"
                        value={userRating.value}
                        name="userRating"
                        id={userRating.id}
                        checked={
                          checked === userRating.value ||
                          searchParams.get('user_rating') === userRating.value
                        }
                        onChange={handleChangeCheck}
                      />
                      <span
                        style={{
                          color: 'black',
                          padding: '10px',
                          fontSize: '13pt',
                        }}
                      >
                        {userRating.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.filterContainerReinitialiser}>
            <p onClick={handleChangeReset}>Réinitialiser les filtres</p>
          </div>
        </section>
        <section className={styles.filmGridContainer}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            results.map((resultApi) => (
              <FilmContainer resultApi={resultApi} key={resultApi.id} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
