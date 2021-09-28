import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import WelcomeNewUsers from './index';

describe('Given a WelcomeNewUsers component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <WelcomeNewUsers />
      );
    });
    test('Then should be a img with the "welcome__logo-img" id', () => {
      expect(screen.getByTestId('welcome__logo-img')).toBeInTheDocument();
    });
    test('And should contain the "Create your list of favorite movies and share it with your friends" text', () => {
      expect(screen.getByTestId('subtitle-text')).toBeInTheDocument();
    });
    test('And should contain the "Login to access your favorite movies list" text', () => {
      expect(screen.getByTestId('login-text')).toBeInTheDocument();
    });
  });
});
