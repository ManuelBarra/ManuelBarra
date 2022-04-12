import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import Header from './index';

describe('Given a Header component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <Header />
      );
    });
    test('Then should be a img logo with id "logo-img" id', () => {
      expect(screen.getByTestId('logo-img')).toBeInTheDocument();
    });
  });
});
