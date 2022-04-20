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
            <div className={styles.filterFond}>Avant 1</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Catégorie</h2>
            <div className={styles.filterFond}>Avant 1</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Restriction d'âge</h2>
            <div className={styles.filterFond}>Avant 1</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Pays</h2>
            <div className={styles.filterFond}>Avant 1</div>
          </div>
          <div className={styles.filterContainer}>
            <h2>Rating</h2>
            <div className={styles.filterFond}>Avant 1</div>
          </div>
          <div className={styles.filterContainerReinitialiser}>
            Réinitialiser les filtres
          </div>
        </section>
        <section className={styles.filmContainer}>Films</section>
      </div>
    </div>
  );
}
