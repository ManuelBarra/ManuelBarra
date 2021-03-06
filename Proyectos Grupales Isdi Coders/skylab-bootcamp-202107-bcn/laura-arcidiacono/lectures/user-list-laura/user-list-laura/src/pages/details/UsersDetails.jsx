import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import actionTypes from '../../redux/actions/action.types';
import UserForm from '../../component/UserForm/UserForm';

export default function UsersDetails() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    if (userId) {
      const foundUser = users.find((currentUser) => currentUser.id === userId);
      setUser(foundUser);
    }
  }, [userId]);

  function userChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  }

  return (
    <main>
      <div className="details">
        <h2>

          {user?.name.toUpperCase()}

          Details
        </h2>
        <div className="details__id">
          <span>
            id:
          </span>
          {user?.id}
        </div>
        <div className="details__data">
          <span>
            Email:
            {' '}
            {user?.email}

          </span>
          <span>
            Phone:
            {' '}
            {user?.phone}

          </span>
          <span>
            Website:
            {' '}
            {user?.website}

          </span>
        </div>
        <UserForm user={user} userChange={userChange} />
        <button type="button">Volver</button>
        <button
          type="button"
          onClick={() => dispatch({
            type: actionTypes.UPDATE_USER,
            user
          })}
        >
          Guardar
        </button>

      </div>
    </main>
  );
}
