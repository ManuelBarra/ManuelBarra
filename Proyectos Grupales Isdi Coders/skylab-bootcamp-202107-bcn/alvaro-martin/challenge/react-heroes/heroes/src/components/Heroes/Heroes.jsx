/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style-heroes.css';

export default function Heroes() {
  const [heroes, setHeroes] = useState(JSON.parse(localStorage.getItem('heroes')));

  function deleteHero(id) {
    const deletedHero = heroes.filter((hero) => hero.id !== id);
    localStorage.setItem('heroes', JSON.stringify(deletedHero));
    setHeroes(deletedHero);
  }

  return (
    <>
      <div>
        <h2>My Heroes</h2>
        <label>
          Hero name:
          {' '}
          <input />
        </label>
        <button type="button" className="heroes-btn">add</button>
      </div>
      <ul className="heroes">
        {heroes.map((hero) => (

          <li>
            <Link
              to={`/details/${hero.id}`}
              key={hero.id}
            >
              <span className="badge">{hero.id}</span>
              {' '}
              {hero.name}
            </Link>
            <button
              onClick={() => deleteHero(hero.id)}
              className="delete"
              type="button"
              title="delete hero"
            >
              x

            </button>

          </li>
        ))}

      </ul>
    </>
  );
}
