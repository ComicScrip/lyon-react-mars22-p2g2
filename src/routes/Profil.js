import ProfilAchievement from '../components/ProfilAchievement';
import ProfilDetail from '../components/ProfilDetail';
import ProfilFilmFav from '../components/ProfilFilmFav';
import styles from '../components/Profil.module.css';

export default function Profil() {
  return (
    <div className={styles.profilPageContainer}>
      <div className={styles.profilFirstContainer}>
        <ProfilDetail />
      </div>
      <div className={styles.profilSecondContainer}>
        <ProfilAchievement />
        <ProfilFilmFav />
      </div>
    </div>
  );
}
