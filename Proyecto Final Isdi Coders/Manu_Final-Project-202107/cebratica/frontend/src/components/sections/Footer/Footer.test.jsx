import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import Footer from './index';

describe('Given a Footer component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <Footer />
      );
    });
    test('Then should be a h4 title, text', () => {
      expect(screen.getByText('Cebratica by Manel & Skylab Coders Academy')).toBeInTheDocument();
    });
  });
});
