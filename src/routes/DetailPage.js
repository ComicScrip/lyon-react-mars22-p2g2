import './detailPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';

export default function DetailPage() {
  const [arrayApi, setArrayApi] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://imdb-api.com/en/API/SearchMovie/k_9vhe3kdy/inception%202010'
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
      <div className="mainContainerProfilPage">
        <img src={arrayApi.image} alt="" />
        <div className="secondContainerProfilPage">
          <div className="filmContainer">
            <h2>{arrayApi.title}</h2>
            <h2>{arrayApi.description}</h2>
            <h2>{arrayApi.runtimeStr}</h2>
          </div>
          <div className="realContainer">
            <h2>REALISATEUR</h2>
          </div>
          <h1 className="rateContainer">
            <Rating
              name="half-rating-read"
              value={arrayApi.imDbRating}
              precision={0.5}
              readOnly
            />
          </h1>
        </div>
        <div className="trailerMediaQ">
          <iframe
            title="Trailer"
            src="https://www.imdb.com/video/vi2959588889"
            width="1000"
            height="700"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            frameBorder="no"
            scrolling="no"
          />
        </div>
      </div>
      <div className="synopsisContainer">
        <h3>{arrayApi.plot}</h3>
      </div>
      <hr />
      <div className="distributionTitle">
        <h1>DISTRIBUTION</h1>
      </div>
      <div className="containerActorsPicturesOne">
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg"
            alt=""
          />
        </div>
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_Ratio0.7273_AL_.jpg"
            alt=""
          />
        </div>
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BYWY0NzFmYjAtYzMwNC00ODc3LWI2ZWEtOTU3YTM0Y2ZiNTM5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.7273_AL_.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="containerActorsPicturesOne">
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_Ratio0.7273_AL_.jpg"
            alt=""
          />
        </div>
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_Ratio0.7273_AL_.jpg"
            alt=""
          />
        </div>
        <div className="actorContainer">
          <h4>ACTOR</h4>
          <img
            className="firstPicture"
            src="https://m.media-amazon.com/images/M/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg"
            alt="https://m.media-amazon.com/images/M/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg"
          />
        </div>
      </div>
      <div className="trailer">
        <iframe
          title="Trailer"
          src="https://www.imdb.com/video/vi2959588889"
          width="480"
          height="270"
          allowFullScreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          frameBorder="no"
          scrolling="no"
        />
      </div>
    </div>
  );
}
