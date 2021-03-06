import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/user.creator';
import loginUser from '../../services/loginUser';

import './header.scss';

export default function Header() {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((store) => store.user);

  function handleLoginClick() {
    loginUser();
  }
  function handleLogoutClick() {
    dispatch(logoutUser());
  }

  const userNotLogged = (
    <>
      <div className="user__button-container">
        <button className="user__login" type="button" onClick={handleLoginClick}>Login</button>
      </div>
    </>
  );

  const userLogged = (
    <>
      <div className="user__information">
        <span className="user__name">{user?.displayName}</span>
        <img className="user__photo" src={user?.photoURL} alt={user?.displayName} />
      </div>
      <div className="user__button-container">
        <button data-testid="logout-button" className="user__logout" type="button" onClick={handleLogoutClick}>Logout</button>
      </div>
    </>
  );

  return (
    <header className="header">
      <h1 data-testid="main-title" className="header__title">To Do List</h1>
      <section className="header__user">
        {isAuthenticated
          ? userLogged
          : userNotLogged}
      </section>
    </header>
  );
}
