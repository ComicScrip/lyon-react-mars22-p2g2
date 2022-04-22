import './Quizz.css';
import React from 'react';

export default function Quizz() {
  return (
    <div className="text-white">
      <div>
        <h1 className="quizz mb-9">Quizz</h1>
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
            <button className="button1 hover:scale-75 w-/12 p-5" type="submit">
              <h2>YES</h2>
            </button>
            <button className="button2 hover:scale-75 p-5" type="submit">
              <h2>NO</h2>
            </button>
          </div>
        </div>
      </div>
      <hr className="ligne2" />
    </div>
  );
}
