import React from 'react';
import styles from './Filter.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

function FilmContainer({ resultApi }) {
  return (
    <div className={styles.filmContainer}>
      <section className={styles.filmAfficheContainer}>
        <img
          src={resultApi.image}
          alt="film favoris 1"
          className={styles.filmAffiche}
        />
      </section>
      <section className={styles.filmDetails}>
        <div className={styles.filmPlot}>
          <p>{resultApi.plot}</p>
        </div>
        <div className={styles.filmDetailPlus}>
          En savoir +
          <div className={styles.filmButtons}>
            <AiOutlineHeart className={styles.buttons} />
            <RiCloseFill className={styles.buttons} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilmContainer;
