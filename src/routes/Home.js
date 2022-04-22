import './Home.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className="mainContainerMediaQ">
      <div className="containerMediaQ">
        <div className="mainTitle">
          <h2>FILMSClaqués.com</h2>
        </div>
        <div className="mainPara">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.labore et dolore
            magna aliqua.
          </p>
        </div>
        <div className="quizzYes">
          <Button
            href="/"
            variant="outlined"
            sx={{
              borderColor: '#C4C4C4',
              backgroundColor: '#C4C4C4',
              color: 'white',
              fontWeight: 'bold',
              opacity: 0.7,
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: 'red',
                borderColor: '#C4C4C4',
                opacity: 0.5,
              },
            }}
          >
            Oui, je veux faire le quizz
          </Button>
        </div>
        <div className="quizzNo">
          <a className="linkStyle" href="/">
            Non, je veux choisir mes films
          </a>
        </div>
      </div>
      <div className="movieMonth">
        <div className="borderMovie">
          <h2>Movie of the month</h2>
        </div>
        <a href="/">
          <img
            className="pictureOfMonth"
            src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
            alt="filmofthemonth"
          />
        </a>
      </div>
    </div>
  );
}
