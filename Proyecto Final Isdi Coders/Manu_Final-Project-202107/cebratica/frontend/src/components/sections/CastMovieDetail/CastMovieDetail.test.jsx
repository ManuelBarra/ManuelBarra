import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import CastMovieDetail from './index';

describe('Given a CastMovieDetail component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <CastMovieDetail />
      );
    });
    test('Then should be a div by Id "castDetails", id', () => {
      expect(screen.getByTestId('castDetails')).toBeInTheDocument();
    });
    test('Then should be a h2 by Id "h2-castDetail", id', () => {
      expect(screen.getByTestId('h2-castDetail')).toBeInTheDocument();
    });
    test('Then should be a p by Id "p-castDetail", id', () => {
      expect(screen.getByTestId('p-castDetail')).toBeInTheDocument();
    });
  });
});
