import React from 'react';
import styles from './Filter.module.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function FilmContainer({ resultApi }) {
  const linkTo = resultApi.id;

  const pathname = `/detailpage/${linkTo}`;
  return (
    <div className={styles.filmContainer}>
      <section className={styles.filmAfficheContainer}>
        <img
          src={resultApi.image}
          alt={`${resultApi.title} poster`}
          className={styles.filmAffiche}
        />
      </section>
      <section className={styles.filmDetails}>
        <div className={styles.filmPlot}>
          <p>{resultApi.plot}</p>
        </div>
        <div className={styles.filmDetailPlus}>
          <Link to={pathname} style={{ color: 'white' }}>
            En savoir +
          </Link>
          <div className={styles.filmButtons}>
            <AiOutlineHeart className={styles.buttons} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilmContainer;
