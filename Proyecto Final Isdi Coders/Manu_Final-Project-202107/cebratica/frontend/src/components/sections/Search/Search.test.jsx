import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import SearchMovies from './index';

describe('Given a searchedMovies component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <SearchMovies />
      );
    });
    test('Then should be a h2 with the "h2 title", id', () => {
      expect(screen.getByTestId('h2-title')).toBeInTheDocument();
    });
    test('And should contain the "form-search", id', () => {
      expect(screen.getByTestId('form-search')).toBeInTheDocument();
    });
    test('And should contain the "input", id', () => {
      expect(screen.getByTestId('inpùt-search')).toBeInTheDocument();
    });
  });
});
