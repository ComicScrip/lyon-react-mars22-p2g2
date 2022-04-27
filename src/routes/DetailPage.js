import './detailPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMovies from '../components/DisplayMovies';
import { useParams } from 'react-router-dom';

const apiKey = process.env.REACT_APP_DETAIL_APIKEY;

export default function DetailPage() {
  const [movie, setMovie] = useState('');
  const [trailer, SetTrailer] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Title/${apiKey}/${id}`)
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/YouTubeTrailer/${apiKey}/${id}`)
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
