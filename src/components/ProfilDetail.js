import React from 'react';
import styles from './Profil.module.css';
import profilPicture from '../img/profil.jpeg';

function ProfilDetail() {
  return (
    <>
      <div className={styles.profilContainer}>
        <h1>Jeanne Profil</h1>

        <section className={styles.profil}>
          <img src={profilPicture} alt="jeanne" className={styles.img} />
          <div className={styles.profilName}>
            <h1>Jeanne Profil</h1>
          </div>
          <div className={styles.profilDescription}>
            <li>
              <b>Prénom</b> : Jeanne
            </li>
            <li>
              <b>Age</b> : 32 ans
            </li>
            <li>
              <b>Catégories préférées</b> : Action, aventure, thriller
            </li>
          </div>
          <div className={styles.profilBio}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit leo ac nulla finibus laoreet. Vestibulum molestie iaculis
              dapibus. Curabitur non nunc ex. Integer magna enim, elementum id
              sollicitudin vitae, tempus sit amet nibh. Sed tristique nisi leo,
              at blandit metus scelerisque viverra.
            </p>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
}

export default ProfilDetail;
