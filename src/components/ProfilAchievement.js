import { LinearProgress } from '@mui/material';
import React from 'react';
import styles from './Profil.module.css';

function ProfilAchievement() {
  return (
    <>
      <section className={styles.achievement}>
        <h2>Achievements</h2>
        <div className={styles.achievementListContainer}>
          <LinearProgress variant="determinate" value={50} />;
        </div>
      </section>

      <hr />
    </>
  );
}

export default ProfilAchievement;
