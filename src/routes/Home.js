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
      <div className="mainContainer">
        <div className="descriptionContainer">
          <div className="mainTitle">
            <h2>FILMSclaqués.com</h2>
          </div>
          <div className="mainPara">
            <p>
              Bonjour et bienvenue sur FILMSCLAQUES.COM, le site où trouver les
              meilleurs Nanars pour tous les goûts et toutes les occasions.
              <br />
              Nous vous offrons la possibilité de faire notre quiz de 5
              questions à l'issu duquel 2 Nanars vous seront proposés. Si vous
              souhaitez découvrir notre sélection de Nanar, n'hésitez pas à
              consulter le lien ci-dessous.
              <br />A VOS NANARS, PRET, PARTEZ!!
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
              Oui, je veux faire le quiz
            </Button>
          </div>
          <div className="quizzNo">
            <a className="linkStyle" href="/filterpage">
              Non, je veux choisir mes films
            </a>
          </div>
        </div>
        <div className="movieNanarContainer">
          <div className="movieMonthTitle">
            <h2>MOVIE OF THE MONTH</h2>
          </div>
          <div className="movieMonthPictureContainer">
            <h2 className="movieMonthTitleDesktop">MOVIE OF THE MONTH</h2>
          </div>
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
