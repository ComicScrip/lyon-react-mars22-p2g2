import './Home.css';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <div className="mainContainerHomePicture">
        <img
          className="mainHomePicture"
          src="http://www.raisingedmonton.com/wp-content/uploads/2016/03/family-movie-1040cs051612.jpg"
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
              Bonjour et bienvenue sur FILMS CLAQUES.COM, le site où trouver les
              meilleurs Nanar pour tous les gouts et toutes les occasions.
              <br />
              Nous vous offrons la possibilité de faire notre Quizz de 5
              questions à l'issu duquel 2 Nanars vous seront proposés. Si vous
              souhaitez découvrir notre selection de Nanar, n'hésitez pas à
              consulter le lien ci-dessous.
              <br />A VOS NANAR, PRET, PARTEZ!!
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
                  color: '#c4c4c4',
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
            <h2 className="movieMonthTitle">Movie of the month</h2>
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
                  color: '#c4c4c4',
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
