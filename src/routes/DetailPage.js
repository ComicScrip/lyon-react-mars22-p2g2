import './detailPage.css';
import React from 'react';
import Rating from '@mui/material/Rating';

export default function DetailPage() {
  const movieList = [
    {
      id: 'tt0193524',
      title: 'The Star Wars Holiday Special',
      runtimeStr: '97 min',
      image:
        'https://imdb-api.com/images/original/MV5BMjJjMjEwMWEtZDcyNC00ODM3LThhZDctNTU0YzU1ZjQ1MmIyXkEyXkFqcGdeQXVyMjg5NDMwMQ@@._V1_Ratio0.6837_AL_.jpg',
      imDbRating: '2.1',
      plot: "Chewbacca and Han Solo try to get to the Wookiee homeworld of Kashyyyk to celebrate Life Day, but are impeded by an Imperial blockade. Chewie's family passes the time with various forms of entertainment.",
      description: '(1978 TV Movie)',
    },
  ];

  return (
    <div>
      <div className="mainContainerProfilPage">
        <img className="moviePicture" src={movieList[0].image} alt="" />
        <div className="secondContainerProfilPage">
          <div className="filmContainer">
            <h2>{movieList[0].title}</h2>
            <h2 className="spaceBtwTitle">{movieList[0].description}</h2>
            <h2>{movieList[0].runtimeStr}</h2>
          </div>

          <h1 className="rateContainer">
            <Rating
              name="half-rating-read"
              value={movieList[0].imDbRating}
              precision={0.5}
              readOnly
            />
          </h1>
        </div>
        <div className="trailerMediaQ">
          <iframe
            title="Trailer"
            src="https://www.imdb.com/video/vi2959588889"
            width="600"
            height="450"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            frameBorder="no"
            scrolling="no"
          />
        </div>
      </div>
      <div className="synopsisContainer">
        <h3 className="fontSyno">{movieList[0].plot}</h3>
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
