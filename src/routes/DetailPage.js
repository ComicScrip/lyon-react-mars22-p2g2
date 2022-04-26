import './detailPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMovies from '../components/DisplayMovies';

export default function DetailPage() {
  const [movie, setMovie] = useState('');
  const [trailer, SetTrailer] = useState('');
  const id = 'tt1375666';

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_9vhe3kdy/${id}`)
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/YouTubeTrailer/k_9vhe3kdy/${id}`)
      .then((answer) => answer.data)
      .then((movieInfo) => {
        SetTrailer(movieInfo);
      });
  }, []);

  return (
    <div className="main">
      <DisplayMovies movie={movie} trailer={trailer} />
    </div>
  );
}
