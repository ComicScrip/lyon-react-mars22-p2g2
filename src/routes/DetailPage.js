import './detailPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMovie from '../components/DisplayMovie';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const apiKey = process.env.REACT_APP_DETAIL_APIKEY;

export default function DetailPage() {
  const [movie, setMovie] = useState('');
  const [trailer, setTrailer] = useState('');
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://cors-proxy.comicscrip.duckdns.org/https://imdb-api.com/en/API/Title/${apiKey}/${id}`
      )
      .then((answer) => answer.data)
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.error(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://cors-proxy.comicscrip.duckdns.org/https://imdb-api.com/en/API/YouTubeTrailer/${apiKey}/${id}`
      )
      .then((answer) => answer.data)
      .then((movieInfo) => {
        setTrailer(movieInfo);
      })
      .catch((err) => {
        console.error(err.response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="main">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <DisplayMovie movie={movie} trailer={trailer} />
      )}
    </div>
  );
}
