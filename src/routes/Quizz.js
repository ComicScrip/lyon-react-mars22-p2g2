import './Quizz.css';
import React from 'react';

export default function Quizz() {
  return (
    <div>
      <div>
        <h1 className="quizz text-6xl">Quizz</h1>
      </div>
      <div className="bloc">
        <div>
          <p className="thisQuestion text-center text-3xl">Tu es plutôt?</p>
        </div>
        <div>
          <div className="myButtons">
            <button className="button1" type="submit">
              <h2 className="buttonYes hover:scale-95 delay-200 w-/12">
                Django
              </h2>
            </button>
            <button className="button2" type="submit">
              <h2 className="buttonNo hover:scale-95 delay-200">Forest Gump</h2>
            </button>
          </div>
        </div>
      </div>
      <div className="ligne2">.</div>
    </div>
  );
}
