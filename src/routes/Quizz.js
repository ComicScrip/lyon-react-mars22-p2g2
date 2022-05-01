import './Quizz.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quizz() {
  const quizzQuestions = [
    {
      id: 'yearQuestion',
      question: "Aujourd'hui on regarde un film de quelle époque ?",
      answerOption: [
        {
          answer: 'Avant 1960',
          value: 'release_date=,1960-01-01&',
          id: 'year1',
        },
        {
          answer: 'Années 1960 – 1980',
          value: 'release_date=1961-01-01,1980-01-01&',
          id: 'year2',
        },
        {
          answer: 'Années 1980 – 2000',
          value: 'release_date=1981-01-01,2000-01-01&',
          id: 'year3',
        },
        {
          answer: 'Années 2000 – 2010',
          value: 'release_date=2001-01-01,2010-01-01&',
          id: 'year4',
        },
        {
          answer: 'Années 2010 à nos jours',
          value: 'release_date=2011-01-01,&',
          id: 'year5',
        },
      ],
    },
    {
      id: 'catQuestion',
      question: 'Tu es plutôt ?',
      answerOption: [
        { answer: 'James Bond', value: 'genres=action&', id: 'cat1' },
        {
          answer: 'Brice de Nice',
          value: 'genres=comedy&',
          id: 'cat2',
        },
        {
          answer: 'Forrest Gump',
          value: 'genres=drama&',
          id: 'cat3',
        },
        {
          answer: 'Harry Potter',
          value: 'genres=fantasy&',
          id: 'cat4',
        },
        {
          answer: 'Chucky',
          value: 'genres=horror&',
          id: 'cat5',
        },
        {
          answer: 'Roméo & Juliette',
          value: 'genres=romance&',
          id: 'cat6',
        },
        {
          answer: 'R2D2',
          value: 'genres=sci-fi&',
          id: 'cat7',
        },
        {
          answer: 'Hannibal Lecter',
          value: 'genres=thriller&',
          id: 'cat8',
        },
        {
          answer: 'Lucky Luke',
          value: 'genres=western&',
          id: 'cat9',
        },
      ],
    },
    {
      id: 'certificateQuestion',
      question: 'As-tu l’âge pour un film ?',
      answerOption: [
        {
          answer: 'Tout public',
          value: 'certificates=us:G&',
          id: 'certificate1',
        },
        {
          answer: 'Interdit aux moins de 13 ans',
          value: 'certificates=us:PG&',
          id: 'certificate2',
        },
        {
          answer: 'Interdit aux moins de 16 ans',
          value: 'certificates=us:R&',
          id: 'certificate3',
        },
        {
          answer: 'Interdit aux moins de 18 ans',
          value: 'certificates=us:NC-17&',
          id: 'certificate4',
        },
      ],
    },
    {
      id: 'countriesQuestion',
      question: 'Où as tu envie de voyager ?',
      answerOption: [
        { answer: 'Brésil', value: 'countries=br&', id: 'countries1' },
        {
          answer: 'Afrique du Sud',
          value: 'countries=za&',
          id: 'countries2',
        },
        {
          answer: 'Chine',
          value: 'countries=ch&',
          id: 'countries3',
        },
        {
          answer: 'Espagne',
          value: 'countries=es&',
          id: 'countries4',
        },
        {
          answer: 'Etats Unis',
          value: 'countries=us&',
          id: 'countries5',
        },
        {
          answer: 'France',
          value: 'countries=fr&',
          id: 'countries6',
        },
        {
          answer: 'Hong Kong',
          value: 'countries=hk&',
          id: 'countries7',
        },
        {
          answer: 'Inde',
          value: 'gcountries=in&',
          id: 'countries8',
        },
        {
          answer: 'Japon',
          value: 'countries=jp&',
          id: 'countries9',
        },
        {
          answer: 'Mexique',
          value: 'countries=mx&',
          id: 'countries10',
        },
        {
          answer: 'Russie',
          value: 'countries=ru&',
          id: 'countries11',
        },
        {
          answer: 'Thailande',
          value: 'countries=th&',
          id: 'countries12',
        },
        {
          answer: 'Turquie',
          value: 'countries=tr&',
          id: 'countries13',
        },
      ],
    },
    {
      id: 'ratingQuestion',
      question: 'Es tu prêt à regarder ?',
      answerOption: [
        {
          answer: 'Un bon navet',
          value: 'user_rating=2.0,3.0.0&',
          id: 'certificate1',
        },
        {
          answer: 'Un navet de qualité supérieure',
          value: 'user_rating=1.0,2.0&',
          id: 'certificate2',
        },
        {
          answer: 'Un navet légendaire',
          value: 'user_rating=,1.0&',
          id: 'certificate3',
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizzValues, setQuizzValues] = useState([]);
  const url = quizzValues.join();

  const navigate = useNavigate();

  const handleQuestionChange = (value) => {
    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
    setQuizzValues((table) => [...table, value]);

    if (nextQuestion === quizzQuestions.length) {
      setQuizzValues((table) => [...table, value]);
      alert("you've reached the end of the quizz");
      navigate(`/results/${url}`);
    }
  };

  return (
    <div>
      <div className="backgroundQuizzFond">
        <div className="quizzContainer">
          <div className="questionNumber">{currentQuestion + 1} / 5</div>
          <div className="quesAnswContainer">
            <section className="questionText">
              <span className="questionNumberText">
                Question {currentQuestion + 1} :&nbsp;
              </span>
              {quizzQuestions[currentQuestion].question}
            </section>
            <section className="answerSection">
              {quizzQuestions[currentQuestion].answerOption
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((answer) => (
                  <button
                    className="buttonQuizzStyle"
                    type="button"
                    key={answer.id}
                    value={answer.value}
                    onClick={(e) => handleQuestionChange(e.target.value)}
                  >
                    {answer.answer}
                  </button>
                ))}
            </section>
          </div>
        </div>
        <hr className="hrQuizzStyle" />
      </div>
    </div>
  );
}
