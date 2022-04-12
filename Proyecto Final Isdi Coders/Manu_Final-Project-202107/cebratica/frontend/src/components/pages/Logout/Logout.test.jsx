import React from 'react';

import { render, screen } from '../../../utils/test.utils';
import LogoutButton from './index';

describe('Given a  LogoutButton', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "Button"', () => {
      beforeEach(() => {
        render(
          <LogoutButton />
        );
      });
      test('And should contain "Logout" text', () => {
        expect(screen.getByText(/Logout/i)).toBeInTheDocument();
      });
    });
  });
});
