import React from 'react';
import styles from '../components/nanarmate.module.css';
import NanarFormulaire from '../components/NanarFormulaire';
import NanarResults from '../components/NanarResults';

export default function Profil() {
  return (
    <div className={styles.miseenforme}>
      <NanarFormulaire />

      <NanarResults />
    </div>
  );
}
