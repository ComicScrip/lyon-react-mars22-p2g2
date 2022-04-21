import './Results.css';
import ResultApiContainer from './ResultApiContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Results() {
  const [arrayApi, setArrayApi] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/API/AdvancedSearch/k_05dzwe3u?user_rating=1.0,3.0&genres=action,adventure&colors=color'
      )
      .then((res) => res.data)
      .then((data) => {
        setArrayApi(data.results);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  return (
    <div>
      <div className="firstContainer">
        <h2>Choose one</h2>
      </div>
      <div className="middleContainer">
        <div className="secondContainerContent">
          <ResultApiContainer resultApi={arrayApi} />
        </div>
        <div className="secondContainerContents">
          {arrayApi.map((resultApi) => (
            <ResultApiContainer resultApi={resultApi} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}
