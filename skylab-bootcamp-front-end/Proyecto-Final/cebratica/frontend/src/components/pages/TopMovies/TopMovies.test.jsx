import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import TopMovies from './index';

describe('Given a TopMovies component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <TopMovies />
      );
    });
    test('Then should be a h2 title by Id "h2-title", id', () => {
      expect(screen.getByTestId('h2-title')).toBeInTheDocument();
    });
  });
});
