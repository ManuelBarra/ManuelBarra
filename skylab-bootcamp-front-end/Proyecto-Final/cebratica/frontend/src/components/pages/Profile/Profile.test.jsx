import React from 'react';

import { render, screen } from '../../../utils/test.utils';
import Profile from './index';

describe('Given a  Profile', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "profile description"', () => {
      beforeEach(() => {
        render(
          <Profile />
        );
      });
      test('And should contain an "Loading..." text', () => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });
      test('And should contain "main-conatiner" id', () => {
        expect(screen.getByTestId('main-conatiner')).toBeInTheDocument();
      });
      test('And should contain "img profile" id', () => {
        expect(screen.getByTestId('img-profile')).toBeInTheDocument();
      });
    });
  });
});
