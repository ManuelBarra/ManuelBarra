import React from 'react';
import { render, screen } from '../../../utils/test.utils';
import LoginButton from './index';

describe('Given a LoginButton', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "button"', () => {
      beforeEach(() => {
        render(
          <LoginButton />
        );
      });
      test('And should contain "Login" text', () => {
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
      });
    });
  });
});
