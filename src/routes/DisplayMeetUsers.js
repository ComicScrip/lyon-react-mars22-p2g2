function DisplayMeetUsers({ nanarUser }) {
  return (
    <div>
      <div className="mainContainerNanar">
        <div className="secondContainerNanar">
          <p>{nanarUser.firstname}</p>
          <br />
          Disponible le {nanarUser.date} pour voir {nanarUser.film} à
          {nanarUser.rdv}
        </div>
      </div>
    </div>
  );
}

export default DisplayMeetUsers;
