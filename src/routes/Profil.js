import ProfilAchievement from '../components/ProfilAchievement';
import ProfilDetail from '../components/ProfilDetail';
import ProfilFilmFav from '../components/ProfilFilmFav';

export default function Profil() {
  return (
    <div>
      <ProfilDetail />
      <ProfilAchievement />
      <ProfilFilmFav />
    </div>
  );
}
