import './Results.css';
import ResultApiContainer from './ResultApiContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [resultApi, setResultApi] = useState([]);
  const getRandomMovie = (array) => {
    const randomMovie = array.sort(() => Math.random() - 0.5);
    return randomMovie;
  };

  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/API/AdvancedSearch/k_8kbcras1?user_rating=1.0,3.0&genres=action,adventure&colors=color'
      )
      .then((res) => res.data)
      .then((data) => {
        setResultApi(getRandomMovie(data.results));
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  return (
    <div>
      <div className="containerResolv">
        <div className="firstContainer">
          <h2 className="chooseOneTitle">Choose one</h2>
        </div>
        <div className="middleContainer">
          {resultApi.slice(0, 2).map((movie) => (
            <div className="secondContainerContent" key={movie.id}>
              <ResultApiContainer movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
