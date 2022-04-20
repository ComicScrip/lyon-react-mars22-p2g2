import React from 'react';
import styles from './Filter.module.css';

function FilmContainer() {
  return (
    <div className={styles.filmContainer}>
      <section className={styles.filmAfficheContainer}>
        <img
          src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
          alt="film favoris 1"
          className={styles.filmAffiche}
        />
      </section>
      <section className={styles.filmDetails}>
        <div className={styles.filmPlot}>
          <div className={styles.filmPlotOverflow}>
            <p>
              Sangoku, un jeune lycéen doit répondre à la dernière volonté de
              son grand-père : rechercher maître Roshi, un expert en arts
              martiaux. Ce dernier lui donne la mission de retrouver les sept
              boules de cristal, les Dragon Balls, avant qu'un puissant démon,
              Lord Piccolo, ne parvienne à les réunir pour dominer le monde en
              utilisant leurs pouvoirs.
            </p>
          </div>
        </div>
        <div className={styles.filmButtons}>En savoir +</div>
      </section>
    </div>
  );
}

export default FilmContainer;
