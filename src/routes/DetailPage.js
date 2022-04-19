import './detailPage.css';

export default function DetailPage() {
  return (
    <div>
      <div className="mainContainerProfilPage">
        <img
          className="filmDetailPicture"
          src="https://m.media-amazon.com/images/M/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
          alt=""
        />
        <div className="secondContainerProfilPage">
          <div className="filmContainer">
            <h2>TITRE FILM</h2>
            <h2>DATE DE SORTIE</h2>
            <h2>RUNTIME</h2>
          </div>
          <div className="realContainer">
            <h2>REALISATEUR</h2>
          </div>
          <h1 className="rateContainer">RATE</h1>
        </div>
        <div className="trailerMediaQ">
          <iframe
            title="Trailer"
            src="https://www.imdb.com/video/vi2959588889"
          />
        </div>
      </div>
      <div className="synopsisContainer">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h3>
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
        <div className=" ">
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
        <iframe title="Trailer" src="https://www.imdb.com/video/vi2959588889" />
      </div>
    </div>
  );
}
