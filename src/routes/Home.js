import './Home.css';

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="mainTitle">
        <h1>FilmsClaqués.com</h1>
      </div>
      <div className="mainPara">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="quizzYes">
        <h2>Oui, je veux faire le Quizz</h2>
      </div>
      <div className="quizzNo">
        <p>Non, laissez moi choisir mes films</p>
      </div>
      <div className="movieMonth">
        <h2>Movie of the month</h2>
      </div>
      <div className="pictureOfMonth">
        <img
          src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
          alt="filmofthemonth"
        />
      </div>
    </div>
  );
}
