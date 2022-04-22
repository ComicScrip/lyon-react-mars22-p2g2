import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

function ResultApiContainer({ resultApi }) {
  return (
    <>
      <div className="knowMoreMovie">
        <img
          className="pictureOfMonthR"
          src={resultApi.image}
          alt={resultApi.title}
        />
        <a href="/" className="knowPara">
          En savoir +
        </a>
      </div>

      <div className="textContainer">
        <p className="plot">{resultApi.plot}</p>
        <br />
        <p className="runtime">{resultApi.runtimeStr}</p>
        <div className="button">
          <AiOutlineHeart className="buttons" />

          <RiCloseFill className="buttons" />
        </div>
      </div>
    </>
  );
}

export default ResultApiContainer;
