const UserCard = () => {
  return (
    <>
      <div className="profile__card--img">
        <img alt="profile" src="/src/assets/images/profile.png" />
      </div>
      <div className="profile__card--info">
        <div className="profile__card--info--details">
          <p className="profile__card--name">KK Vinay</p>
          <p className="profile__card--mail">Vinay090@gmail.com</p>
          <p className="profile__card--userId">vinay060</p>
        </div>

        <ul className="profile__card--categories">
          <li className="profile__card--category">Horror</li>
          <li className="profile__card--category">Thriller</li>
          <li className="profile__card--category">Action</li>
          <li className="profile__card--category">Fiction</li>
        </ul>
      </div>
    </>
  );
};

export default UserCard;
