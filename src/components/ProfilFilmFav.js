import React from 'react';
import styles from './Profil.module.css';

function ProfilFilmFav() {
  return (
    <section className={styles.filmsFavoris}>
      <img
        src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
        alt="film favoris 1"
        className={styles.imgFilm}
      />

      <img
        src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
        alt="film favoris 2"
        className={styles.imgFilm}
      />

      <img
        src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
        alt="film favoris 3"
        className={styles.imgFilm}
      />
    </section>
  );
}

export default ProfilFilmFav;
