import * as dayjs from 'dayjs';
import styles from '../components/nanarmate.module.css';

function DisplayAvailibilities({ nanarUser }) {
  const { date } = nanarUser;
  const formatDate = dayjs(date).format('D MMMM YYYY');

  return (
    <div className={styles.secondContainerNanar}>
      <div className={styles.nanarTextContainer}>
        <p style={{ marginBottom: '10px', fontSize: '1.6rem' }}>
          {nanarUser.userName}
        </p>
        <p>
          <span style={{ fontStyle: 'italic' }}>Disponible le :</span>{' '}
          {formatDate} à {nanarUser.heure.slice(0, 5)}
        </p>
        <p style={{ marginBottom: '10px' }}>
          <span style={{ fontStyle: 'italic' }}>Pour voir :</span>{' '}
          {nanarUser.movieName}
        </p>
        <p>
          <span style={{ fontStyle: 'italic' }}>Où ?</span> {nanarUser.location}
        </p>
      </div>
    </div>
  );
}

export default DisplayAvailibilities;
