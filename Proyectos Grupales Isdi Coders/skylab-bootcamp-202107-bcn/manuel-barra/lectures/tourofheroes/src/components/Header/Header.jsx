/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Styles.css';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>

    </header>
  );
}
