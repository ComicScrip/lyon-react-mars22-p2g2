import './Quizz.css';
import React from 'react';

export default function Quizz() {
  return (
    <div>
      <div>
        <h1 className="quizz">Quizz</h1>
      </div>
      <div className="bloc">
        <div className="question">
          <p>Question :</p>
          <p>
            HTML-ipsum est un générateur de faux texte (Lorem Ipsum) destiné à
            remplir de texte vos designs pour obtenir un rendu lorsque vous
            n'avez pas encore de contenu. Plusieurs type de mise en forme sont
            disponibles : paragraphe, liste (non)ordonnée, phrase, etc. Un clic
            sur le titre ("long paragraph", etc.)
          </p>
        </div>
        <div className="ligne1">.</div>
        <div>
          <div className="reponse">
            <p>Réponse :</p>
          </div>
          <div className="myButtons">
            <h2 onClick={'YES'}>YES</h2>
            <h2 onClick={'NO'}>NO</h2>
          </div>
        </div>
      </div>
      <hr className="ligne2" />
    </div>
  );
}
