import React, { useContext } from 'react';
import styles from './Filter.module.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../contexts/favoriteContext';

function FilmContainer({ resultApi, id }) {
  const linkTo = resultApi.id;

  const pathname = `/detailpage/${linkTo}`;

  const { toggleFavoriteMovie, isFavoriteMovie } = useContext(FavoriteContext);

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
            {isFavoriteMovie(id) ? (
              <AiFillHeart
                className={styles.buttons}
                onClick={() => toggleFavoriteMovie(id)}
              />
            ) : (
              <AiOutlineHeart
                className={styles.buttons}
                onClick={() => toggleFavoriteMovie(id)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilmContainer;
