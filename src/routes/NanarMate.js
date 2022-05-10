import React from 'react';
import styles from '../components/nanarmate.module.css';
import NanarFormulaire from '../components/NanarFormulaire';
import NanarResult from './NanarResult';

export default function Profil() {
  return (
    <div className={styles.miseenforme}>
      <NanarFormulaire />

      <NanarResult />
    </div>
  );
}
