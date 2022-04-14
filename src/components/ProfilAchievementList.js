import React from 'react';
import { LinearProgress } from '@mui/material';
import styles from './Profil.module.css';

function ProfilAchievementList({ value }) {
  return (
    <div className={styles.achievementList}>
      <div className={styles.achievementTitle}>
        <p>10 films visionnés</p>
      </div>
      <div className={styles.achievementProgressBar}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ width: '90%' }}
        />
      </div>
    </div>
  );
}

export default ProfilAchievementList;
