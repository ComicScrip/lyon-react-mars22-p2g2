import './Quizz.css';
import React from 'react';

export default function Quizz() {
  return (
    <div className="text-white">
      <div>
        <h1 className="quizz mb-9 text-3xl">Quizz</h1>
      </div>
      <div className="bloc">
        <div className="question pb-8">
          <h3>Question :</h3>
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
            <h3>Réponse :</h3>
          </div>
          <div className="myButtons">
            <button className="button1 h-24 w-/12" type="submit">
              <h2 className="hover:scale-75 p-5">
                YES, <p>, of course! i'm loving it!!!</p>
              </h2>
            </button>
            <button className="button2" type="submit">
              <h2 className="hover:scale-75 p-5">NO</h2>
            </button>
          </div>
        </div>
      </div>
      <hr className="ligne2" />
    </div>
  );
}
