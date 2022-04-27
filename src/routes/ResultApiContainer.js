import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

function ResultApiContainer({ movie }) {
  return (
    <>
      <div className="knowMoreMovie">
        <img className="pictureOfMonthR" src={movie.image} alt={movie.title} />
        <a href="/" className="knowPara">
          En savoir +
        </a>
      </div>
      <div className="textContainer">
        <div className="plotContainer">
          <p className="plot">{movie.plot}</p>
        </div>
        <p className="runtime">{movie.runtimeStr}</p>
        <div className="button">
          <AiOutlineHeart className="buttons" />

          <RiCloseFill className="buttons" />
        </div>
      </div>
    </>
  );
}

export default ResultApiContainer;
