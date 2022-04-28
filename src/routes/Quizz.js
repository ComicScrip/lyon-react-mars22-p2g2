import './Quizz.css';
import React from 'react';

export default function Quizz() {
  return (
    <div>
      <div>
        <h1 className="quizz mb-9 text-6xl">Quizz</h1>
      </div>
      <div className="bloc">
        <div>
          <h3 className="question pb-8">Question :</h3>
          <p className="text-lg">
            HTML-ipsum est un générateur de faux texte (Lorem Ipsum) destiné à
            remplir de texte vos designs pour obtenir un rendu lorsque vous
            n'avez pas encore de contenu. Plusieurs type de mise en forme sont
            disponibles : paragraphe, liste (non)ordonnée, phrase, etc. Un clic
            sur le titre ("long paragraph", etc.)
          </p>
        </div>
        <div className="ligne1">.</div>
        <div>
          <div>
            <h3 className="reponse">Réponse :</h3>
          </div>
          <div className="myButtons">
            <button className="button1" type="submit">
              <h2 className="buttonYes hover:scale-95 delay-200 w-/12">
                YES,
                <a href="/Profil">
                  <p>, of course! i'm loving it!!!</p>
                </a>
              </h2>
            </button>
            <button className="button2" type="submit">
              <h2 className="buttonNo hover:scale-95 delay-200">
                NO
                <a href="/Filterpage">
                  <p>, je ne veux pas faire le quizz</p>
                </a>
              </h2>
            </button>
          </div>
        </div>
      </div>
      <div className="ligne2">.</div>
    </div>
  );
}
