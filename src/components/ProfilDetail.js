import React from 'react';
import styles from './Profil.module.css';
import profilPicture from '../pictures/profil.jpeg';

function ProfilDetail() {
  return (
    <div>
      <h1>Jeanne Profil</h1>

      <section className={styles.profilDescription}>
        <img src={profilPicture} alt="jeanne" className={styles.img} />
        <div className={styles.profilDetail}>
          <li>Prénom: Jeanne</li>
          <li>Age: 32 ans</li>
          <li>Catégories préférées : Action, aventure, thriller</li>
        </div>
      </section>

      <hr />
    </div>
  );
}

export default ProfilDetail;
