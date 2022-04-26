import '../routes/detailPage.css';
import Rating from '@mui/material/Rating';
import ReactPlayer from 'react-player';

function DisplayMovies({ movie, trailer }) {
  return (
    movie,
    trailer && (
      <>
        <div className="mainContainerProfilPage">
          <img className="moviePicture" src={movie.image} alt="" />
          <div className="secondContainerProfilPage">
            <div className="filmContainer">
              <h2>{movie.title}</h2>
              <h2 className="spaceBtwTitle">{movie.description}</h2>
              <h2>{movie.runtimeStr}</h2>
            </div>

            <h1 className="rateContainer">
              <Rating
                name="half-rating-read"
                value={movie.imDbRating}
                precision={0.5}
                readOnly
              />
            </h1>
          </div>
          <div className="trailerMediaQ">
            <ReactPlayer
              url={trailer.videoUrl}
              controls
              playing
              muted
              className="trailer"
              height="100%"
            />
          </div>
        </div>
        <div className="synopsisContainer">
          <h3 className="fontSyno">{movie.plot}</h3>
        </div>
        <hr />
        <h1 className="distriTitle">DISTRIBUTION</h1>
        <div className="distribution">
          {movie.actorList.slice(0, 6).map((actor) => (
            <div key={actor.id}>
              <img
                className="actorsPictures"
                src={actor.image}
                alt={actor.name}
              />
              <p className="actorName" style={{ textAlign: 'center' }}>
                {actor.name}
              </p>
            </div>
          ))}
        </div>
        <div className="trailerArrete">
          <ReactPlayer
            url={trailer.videoUrl}
            controls
            playing
            muted
            className="trailer"
            width="95%"
          />
        </div>
      </>
    )
  );
}

export default DisplayMovies;
