import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FavoriteContext } from '../contexts/favoriteContext';

function ResultApiContainer({ movie, id }) {
  const linkTo = movie.id;

  const pathname = `/detailpage/${linkTo}`;

  const { toggleFavoriteMovie, isFavoriteMovie } = useContext(FavoriteContext);
  return (
    movie && (
      <>
        <div className="knowMoreMovie">
          <Link to={pathname}>
            <img
              className="pictureOfMonthR"
              src={movie.image}
              alt={movie.title}
            />
          </Link>
          <Link className="knowPara" to={pathname}>
            En savoir +
          </Link>
          <div className="filmButtons">
            {isFavoriteMovie(id) ? (
              <AiFillHeart
                className="buttons"
                onClick={() => toggleFavoriteMovie(id)}
              />
            ) : (
              <AiOutlineHeart
                className="buttons"
                onClick={() => toggleFavoriteMovie(id)}
              />
            )}
          </div>
        </div>
        <div className="textContainer">
          <div className="plotContainer">
            <p className="plot">{movie.plot}</p>
          </div>
          <p className="runtime">{movie.runtimeStr}</p>
          <div className="actorNoPic">
            <hr style={{ margin: '5px 0px' }} />
            <p className="actorsPara">Actors :</p>
            <br />
            {(movie.starList || []).slice(0, 5).map((actorList) => (
              <div key={actorList.name}>
                <p className="">{actorList.name}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default ResultApiContainer;
