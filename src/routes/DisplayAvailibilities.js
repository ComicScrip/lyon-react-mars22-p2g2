import * as dayjs from 'dayjs';

function DisplayAvailibilities({ nanarUser }) {
  const { date } = nanarUser;
  const formatDate = dayjs(date).format('D MMMM YYYY');
  return (
    <div className="secondContainerNanar">
      <div className="nanarTextContainer">
        <p>{nanarUser.userName},</p>
        <br />
        Disponible le : {formatDate}&nbsp;
        {nanarUser.heure} pour voir {nanarUser.movieName} à&nbsp;
        {nanarUser.location}.
      </div>
    </div>
  );
}

export default DisplayAvailibilities;
