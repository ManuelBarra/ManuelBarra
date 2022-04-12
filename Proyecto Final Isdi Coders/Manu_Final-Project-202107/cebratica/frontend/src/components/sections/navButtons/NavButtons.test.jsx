import React from 'react';
import { render, screen } from '../../../utils/test.utils';

import NavButtons from './index';

describe('Given a NavButtons component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <NavButtons />
      );
    });
    test('Then should be a button with id "button-pagination1" id', () => {
      expect(screen.getByTestId('button-pagination1')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination2" id', () => {
      expect(screen.getByTestId('button-pagination2')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination3" id', () => {
      expect(screen.getByTestId('button-pagination3')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination4" id', () => {
      expect(screen.getByTestId('button-pagination4')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination5" id', () => {
      expect(screen.getByTestId('button-pagination5')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination6" id', () => {
      expect(screen.getByTestId('button-pagination6')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination7" id', () => {
      expect(screen.getByTestId('button-pagination7')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination8" id', () => {
      expect(screen.getByTestId('button-pagination8')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination9" id', () => {
      expect(screen.getByTestId('button-pagination9')).toBeInTheDocument();
    });
    test('Then should be a button with id "button-pagination10" id', () => {
      expect(screen.getByTestId('button-pagination10')).toBeInTheDocument();
    });
  });
});
