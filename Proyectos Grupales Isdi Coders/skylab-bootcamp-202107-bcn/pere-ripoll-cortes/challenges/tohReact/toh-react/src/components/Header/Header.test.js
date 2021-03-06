import React from 'react';
import Header from './Header';
import { render, screen } from '../../utils/test-utils';

describe('Given a Header component', () => {
  test('Should render Tour of Heroes', () => {
    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <Header />,
    );
    expect(screen.getByText(/Tour/i)).toBeInTheDocument();
  });
});
