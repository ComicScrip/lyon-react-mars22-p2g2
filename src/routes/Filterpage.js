import FilmContainer from '../components/FilmContainer';
import styles from '../components/Filter.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Filterpage() {
  const [checked, setChecked] = useState(false);
  const handleChangeCheck = () => {
    setChecked(!checked);
  };

  const [arrayApi, setArrayApi] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/API/AdvancedSearch/k_8kbcras1?user_rating=1.0,3.0&genres=comedy'
      )
      .then((res) => res.data)
      .then((data) => {
        setArrayApi(data.results);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

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
              <div onChange={handleChangeCheck}>
                <label htmlFor="action">
                  <input
                    type="radio"
                    value="action"
                    name="categorie"
                    id="action"
                    checked={checked}
                  />
                  <span style={{ color: 'black' }}>Action</span>
                </label>
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
            Réinitialiser les filtres
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
