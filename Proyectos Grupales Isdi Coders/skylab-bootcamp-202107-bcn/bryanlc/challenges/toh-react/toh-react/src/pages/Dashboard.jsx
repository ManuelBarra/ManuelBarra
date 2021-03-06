import React from 'react';
import { Link } from 'react-router-dom';

import heroes from '../Heroes';
// const heroes = JSON.parse(localStorage.getItem('heroes'));

import './Dashboard.css';

export default function Dashboard() {
  const topHeros = heroes.slice(1, 5);
  return (
    <>
      <div className="heroes-menu">
        {
         topHeros.map((hero) => (
           <Link
             to={`/detail/${hero.id}`}
             key={hero.id}
           >
             {hero.name}
           </Link>
         ))
        }
      </div>
    </>
  );
}
