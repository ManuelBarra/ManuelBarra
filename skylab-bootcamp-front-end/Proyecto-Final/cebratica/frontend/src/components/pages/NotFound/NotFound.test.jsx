import React from 'react';

import { render, screen } from '../../../utils/test.utils';
import Pages404 from './index';

describe('Given a  Pages404', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "h1"', () => {
      beforeEach(() => {
        render(
          <Pages404 />
        );
      });
      test('And should contain "page404" id', () => {
        expect(screen.getByTestId('page404')).toBeInTheDocument();
      });
    });
  });
});
