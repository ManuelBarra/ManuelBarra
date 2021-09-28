import React from 'react';

import { render, screen } from '../../../utils/test.utils';
import FavoriteMovies from './index';

describe('Given a Suggestion Favourite List', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "h1"', () => {
      beforeEach(() => {
        render(
          <FavoriteMovies />
        );
      });
      test('And should contain the "My favorite movies" text', () => {
        expect(screen.getByText(/My favorite movies/i)).toBeInTheDocument();
      });
    });
  });
});
