import './Results.css';
import ResultApiContainer from './ResultApiContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [resultApi, setResultApi] = useState([]);
  const test = (array) => {
    const test2 = array.sort(() => Math.random() - 0.5);
    return test2;
  };

  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/API/AdvancedSearch/k_9vhe3kdy?user_rating=1.0,3.0&genres=action,adventure&colors=color'
      )
      .then((res) => res.data)
      .then((data) => {
        setResultApi(test(data.results));
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  return (
    <div>
      <div className="containerResolv">
        <div className="firstContainer">
          <h2>Choose one</h2>
        </div>
        <div className="middleContainer">
          {resultApi.slice(0, 2).map((movie) => (
            <div className="secondContainerContent">
              <ResultApiContainer key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
