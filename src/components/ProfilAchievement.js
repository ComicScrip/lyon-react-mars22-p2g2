import React from 'react';
import styles from './Profil.module.css';
import ProfilAchievementList from './ProfilAchievementList';

function ProfilAchievement() {
  return (
    <>
      <section className={styles.achievement}>
        <h2>Achievements</h2>
        <ProfilAchievementList value={50} />
        <ProfilAchievementList value={20} />
        <ProfilAchievementList value={40} />
        <ProfilAchievementList value={20} />
        <ProfilAchievementList value={80} />
      </section>

      <hr />
    </>
  );
}

export default ProfilAchievement;
