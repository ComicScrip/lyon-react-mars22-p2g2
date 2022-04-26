import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';

function ResultApiContainer({ arrayApi }) {
  return (
    <>
      <div className="knowMoreMovie">
        <img
          className="pictureOfMonthR"
          src={arrayApi.image}
          alt={arrayApi.title}
        />
        <a href="/" className="knowPara">
          En savoir +
        </a>
      </div>

      <div className="textContainer">
        <p className="plot">{arrayApi.plot}</p>
        <br />
        <p className="runtime">{arrayApi.runtimeStr}</p>
        <div className="button">
          <AiOutlineHeart className="buttons" />

          <RiCloseFill className="buttons" />
        </div>
      </div>
    </>
  );
}

export default ResultApiContainer;
