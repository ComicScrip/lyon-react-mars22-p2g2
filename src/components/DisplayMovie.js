/* eslint-disable operator-linebreak */
import '../routes/detailPage.css';
import Rating from '@mui/material/Rating';
import ReactPlayer from 'react-player';
import { BsFillCameraVideoOffFill } from 'react-icons/bs';
import * as dayjs from 'dayjs';

function DisplayMovie({ movie, trailer }) {
  const date = movie.releaseDate;
  const newFormatdate = dayjs(date).format('D MMMM YYYY');

  return (
    movie &&
    trailer && (
      <>
        <div className="mainContainerProfilPage">
          <div className="moviePictureContainer">
            <img className="moviePicture" src={movie.image} alt="" />
          </div>

          <div className="secondContainerProfilPage">
            <div className="filmContainer">
              <h2>{movie.title}</h2>
              <h2 className="spaceBtwTitle">{newFormatdate}</h2>
              <h2 className="runTime">{movie.runtimeStr}</h2>
            </div>

            <h1 className="rateContainer">
              <Rating
                sx={{ '& .MuiRating-iconEmpty': { color: '#faaf00' } }}
                name="half-rating-read"
                value={movie.imDbRating}
                precision={0.5}
                readOnly
              />
            </h1>
          </div>
          <div className="trailerMediaQ">
            {trailer.videoUrl === '' ? (
              <div className="noVideoIconMediaQ">
                <p className="noTrailerAvailable">No trailer available</p>
                <BsFillCameraVideoOffFill
                  style={{
                    fontSize: '15em',
                    border: 'solid',
                    padding: '15px',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ) : (
              <ReactPlayer
                url={trailer.videoUrl}
                className="trailer"
                controls
                playing
                muted
                width="600px"
                height="350px"
              />
            )}
          </div>
        </div>
        <div className="synopsisContainer">
          <h3 className="fontSyno">{movie.plot}</h3>
        </div>
        <hr />
        <h1 className="distriTitle">DISTRIBUTION</h1>
        <div className="distribution">
          {(movie.actorList || []).slice(0, 6).map((actor) => (
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
          {trailer.videoUrl === '' ? (
            <BsFillCameraVideoOffFill
              style={{
                fontSize: '5em',
              }}
            />
          ) : (
            <ReactPlayer
              url={trailer.videoUrl}
              className="trailer"
              controls
              playing
              muted
              width="89%"
            />
          )}
        </div>
      </>
    )
  );
}

export default DisplayMovie;
