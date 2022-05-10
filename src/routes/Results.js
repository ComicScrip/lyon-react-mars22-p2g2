import './Results.css';
import ResultApiContainer from './ResultApiContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [resultApi, setResultApi] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-proxy.comicscrip.duckdns.org/https://imdb-api.com/API/AdvancedSearch/k_9vhe3kdy?user_rating=1.0,3.0&genres=action,adventure&colors=color'
      )
      .then((res) => res.data)
      .then((data) => {
        setResultApi(data.results[10]);
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
          <div className="secondContainerContent">
            <ResultApiContainer resultApi={resultApi} />
          </div>
          <div className="secondContainerContents">
            <ResultApiContainer resultApi={resultApi} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
