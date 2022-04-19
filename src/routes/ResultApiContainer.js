import React from 'react';
import { FcLike } from 'react-icons/fc';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function ResultApiContainer({ resultApi }) {
  return (
    <>
      <img
        className="pictureOfMonthR"
        src={resultApi.image}
        alt={resultApi.title}
      />
      <div className="textContainer">
        <p className="plot">{resultApi.plot}</p>
        <br />
        <p className="runtime">{resultApi.runtimeStr}</p>
        <p className="knowMore">En savoir +</p>
        <div className="button">
          <button type="submit">
            <FcLike size={30} />
          </button>
          <button type="submit">
            <IoIosCloseCircleOutline size={30} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ResultApiContainer;
