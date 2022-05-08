import './Results.css';
import ResultApiContainer from './ResultApiContainer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const apiKey = process.env.REACT_APP_DETAIL_APIKEY;

export default function Results() {
  const [resultApi, setResultApi] = useState([]);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const getRandomMovie = (array) => {
    const randomMovie = array.sort(() => Math.random() - 0.5);
    return randomMovie;
  };

  useEffect(() => {
    axios
      .get(
        `https://imdb-api.com/API/AdvancedSearch/${apiKey}?user_rating=1.0,3.0&${id}`
      )
      .then((res) => res.data)
      .then((data) => {
        setResultApi(getRandomMovie(data.results));
      })
      .catch((err) => {
        console.error(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="resultPageMainContainer">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <div className="resultTitleContainer">
            <h2 className="chooseOneTitle">NOS SUGGESTIONS POUR TOI</h2>
          </div>
          <div className="resultsContainer">
            {resultApi.slice(0, 2).map((movie) => (
              <div className="resultContentContainer" key={movie.id}>
                <ResultApiContainer movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
