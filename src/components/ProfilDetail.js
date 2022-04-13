import React from 'react';
import styles from './Profil.module.css';
import profilPicture from '../pictures/profil.jpeg';

function ProfilDetail() {
  return (
    <>
      <div className={styles.profilContainer}>
        <h1>Jeanne Profil</h1>

        <section className={styles.profil}>
          <img src={profilPicture} alt="jeanne" className={styles.img} />
          <div className={styles.profilDescription}>
            <li>Prénom: Jeanne</li>
            <li>Age: 32 ans</li>
            <li>Catégories préférées : Action, aventure, thriller</li>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
}

export default ProfilDetail;
