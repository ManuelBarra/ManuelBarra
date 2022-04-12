import React from 'react';

import { render, screen } from '../../../utils/test.utils';
import MovDetail from './index';

describe('Given a  MovDetail', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "details-section"', () => {
      beforeEach(() => {
        render(
          <MovDetail />
        );
      });
      test('And should contain "details-section" id', () => {
        expect(screen.getByTestId('details-section')).toBeInTheDocument();
      });
      test('And should div "movie-detail" id', () => {
        expect(screen.getByTestId('movie-detail')).toBeInTheDocument();
      });
    });
  });
});
