import * as dayjs from 'dayjs';
import styles from '../components/nanarmate.module.css';

function DisplayAvailibilities({ nanarUser }) {
  const { date } = nanarUser;
  const formatDate = dayjs(date).format('D MMMM YYYY');
  return (
    <div className={styles.secondContainerNanar}>
      <div className={styles.nanarTextContainer}>
        <p>{nanarUser.userName},</p>
        <p>
          Disponible le : {formatDate} à {nanarUser.heure};
        </p>
        <p>Pour voir: {nanarUser.movieName}</p>
        <p>Où ? {nanarUser.location}</p>
      </div>
    </div>
  );
}

export default DisplayAvailibilities;
