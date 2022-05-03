import React, { useState } from 'react';
import styles from './Filter.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { IoHeartDislikeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function FilmContainer({ resultApi }) {
  const linkTo = resultApi.id;
  const [isFavorite, setIsFavorite] = useState(false);

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
            {isFavorite ? (
              <IoHeartDislikeOutline
                className={styles.buttons}
                onClick={() => setIsFavorite(!isFavorite)}
              />
            ) : (
              <AiFillHeart
                className={styles.buttons}
                onClick={() => setIsFavorite(!isFavorite)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilmContainer;
