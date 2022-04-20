import FilmContainer from '../components/FilmContainer';
import styles from '../components/Filter.module.css';

export default function Filterpage() {
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
              <div>
                <label htmlFor="action">
                  <input type="checkbox" id="action" name="action" />
                  Action
                </label>
              </div>
              <div>
                <label htmlFor="comédie">
                  <input type="checkbox" id="comédie" name="comédie" />
                  Comédie
                </label>
              </div>
              <div>
                <label htmlFor="famille">
                  <input type="checkbox" id="famille" name="famille" />
                  Famille
                </label>
              </div>
              <div>
                <label htmlFor="fantastique">
                  <input type="checkbox" id="fantastique" name="fantastique" />
                  Fantastique
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
          <FilmContainer />
          <FilmContainer />
          <FilmContainer />
          <FilmContainer />
          <FilmContainer />
          <FilmContainer />
        </section>
      </div>
    </div>
  );
}
