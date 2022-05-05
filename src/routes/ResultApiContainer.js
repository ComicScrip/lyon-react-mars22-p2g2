import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function ResultApiContainer({ movie }) {
  const linkTo = movie.id;

  const pathname = `/detailpage/${linkTo}`;
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
        </div>
        <div className="textContainer">
          <div className="plotContainer">
            <p className="plot">{movie.plot}</p>
          </div>
          <p className="runtime">{movie.runtimeStr}</p>
          <div className="actorNoPic">
            <hr />
            <p className="actorsPara">Actors :</p>
            <br />
            {(movie.starList || []).slice(0, 5).map((actorNoPic) => (
              <div key={actorNoPic.name}>
                <p className="">{actorNoPic.name}</p>
              </div>
            ))}
          </div>
          <div className="button">
            <AiOutlineHeart className="buttons" />

            <RiCloseFill className="buttons" />
          </div>
        </div>
      </>
    )
  );
}

export default ResultApiContainer;
