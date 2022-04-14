import './Results.css';

export default function Results() {
  return (
    <div>
      <div className="firstContainer">
        <h2>Choose one</h2>
      </div>
      <div className="middleContainer">
        <div className="secondContainerContent">
          <img
            className="pictureOfMonthR"
            src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
            alt="filmofthemonth"
          />
          <div className="textContainer">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="button">
              <button type="submit">Like</button>
              <button type="submit">Unlike</button>
            </div>
          </div>
        </div>
        <div className="secondContainerContents">
          <img
            className="pictureOfMonthR"
            src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
            alt="filmofthemonth"
          />
          <div className="textContainer">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="button">
              <button type="submit">Like</button>
              <button type="submit">Unlike</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
