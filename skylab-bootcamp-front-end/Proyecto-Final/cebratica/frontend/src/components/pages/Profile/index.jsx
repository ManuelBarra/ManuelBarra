import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import './Profile.scss';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading... </div>;
  }
  return (
    isAuthenticated && (
    <main data-testId="main-conatiner" className="profile-container">
      <img data-testId="img-profile" className="profile-container__img" src={user.picture} alt="user" />
      <p className="profile-container__nickName">
        {user.nickname}
      </p>
      <p className="profile-container__name">
        {user.name}
      </p>
      <Button className="profile-container__button" type="submit">Favorite movies</Button>
    </main>
    )
  );
};

export default Profile;
