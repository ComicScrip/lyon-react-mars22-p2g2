import './Home.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <div className="mainContainerHomePicture">
        <img
          className="mainHomePicture"
          src="https://upopi.ciclic.fr/sites/default/files/styles/11x4_1920/public/ca-tourne-a-manhattan-1995-06-g.jpg?itok=PjyGcJFe"
          alt="hello"
        />
      </div>
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
              tempor incididunt ut labore et dolore magna aliqua.labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="quizzYes">
            <Button
              href="/quizz"
              variant="outlined"
              sx={{
                borderColor: '#FFCE31',
                backgroundColor: '#FFCE31',
                color: 'black',
                fontWeight: 'bold',

                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  transition: '0.7s',
                },
              }}
            >
              Oui, je veux faire le quizz
            </Button>
          </div>
          <div className="quizzNo">
            <a className="linkStyle" href="/filterpage">
              Non, je veux choisir mes films
            </a>
          </div>
        </div>
        <div className="movieMonth">
          <div className="borderMovie">
            <h2 className="movieMonths">Movie of the month</h2>
          </div>
          <a href="/detailpage">
            <img
              className="pictureOfMonth"
              src="https://imdb-api.com/images/original/MV5BYTUyNjZkMjEtYmQ5OS00NzljLThiMmQtNWIwNTM1YjUyOWNjXkEyXkFqcGdeQXVyMTI0MzA4NTgw._V1_Ratio0.6837_AL_.jpg"
              alt="filmofthemonth"
            />
          </a>
          <div className="comunityContainer">
            <Button
              href="/nanarmate"
              variant="outlined"
              sx={{
                borderColor: '#FFCE31',
                backgroundColor: '#FFCE31',
                color: 'black',
                fontWeight: 'bold',

                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  transition: '0.7s',
                },
              }}
            >
              Rencontrer la communauté Nanar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
