import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LogoutButton.scss';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      data-testid="logout-button"
      className="logout-button"
      type="button"
      onClick={() => logout()}
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
