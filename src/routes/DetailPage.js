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
      link: 'https://www.imdb.com/video/vi684114201',
    },
  ];
  const actorList = [
    {
      id: 'nm0000434',
      imageMh:
        'https://imdb-api.com/images/original/MV5BOGY2MjI5MDQtOThmMC00ZGIwLWFmYjgtYWU4MzcxOGEwMGVkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio1.7727_AL_.jpg',
      nameMh: 'Mark Hamill',
      imageHf:
        'https://imdb-api.com/images/original/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_Ratio0.7273_AL_.jpg',
      nameHf: 'Harrison Ford',
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
            src={movieList[0].link}
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
          <h4>{actorList[0].nameMh}</h4>
          <img className="firstPicture" src={actorList[0].imageMh} alt="" />
        </div>
        <div className="actorContainer">
          <h4>{actorList[0].nameHf}</h4>
          <img className="firstPicture" src={actorList[0].imageHf} alt="" />
        </div>
      </div>
      <div className="trailer">
        <iframe
          title="Trailer"
          src={movieList[0].link}
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
