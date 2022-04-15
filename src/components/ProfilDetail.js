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
          <div className={styles.profilName}>
            <h1>Jeanne Profil</h1>
          </div>
          <div className={styles.profilDescription}>
            <li>Prénom: Jeanne</li>
            <li>Age: 32 ans</li>
            <li>Catégories préférées : Action, aventure, thriller</li>
          </div>
          <div className={styles.profilBio}>
            <div className={styles.profilBioScrollContainer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit leo ac nulla finibus laoreet. Vestibulum molestie
                iaculis dapibus. Curabitur non nunc ex. Integer magna enim,
                elementum id sollicitudin vitae, tempus sit amet nibh. Sed
                tristique nisi leo, at blandit metus scelerisque viverra.
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
}

export default ProfilDetail;
