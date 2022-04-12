import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import DeleteInFavoriteList from './DeleteInFavoriteList';

describe('Given a DeleteInFavoriteList component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <DeleteInFavoriteList />
      );
    });
    test('Then should be a div by Id "div-button-delete", id', () => {
      expect(screen.getByTestId('div-button-delete')).toBeInTheDocument();
    });
    test('Then should be a button by Id "button-delete", id', () => {
      expect(screen.getByTestId('button-delete')).toBeInTheDocument();
    });
  });
});
