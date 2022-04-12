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
    test('And should contain the "Its a simply web, create your list of favourite Movies and preserve." text', () => {
      expect(screen.getByTestId('subtitle-text')).toBeInTheDocument();
    });
    test('And should contain the "Login if would you like add movies to your favourites list" text', () => {
      expect(screen.getByTestId('login-text')).toBeInTheDocument();
    });
  });
});
