import React from 'react';
import './SportsSelector.scss';
import { Link } from 'react-router-dom';

export default function SportsSelector() {
  return (

    <nav className="sportSelector">

      <Link to="/countries/Soccer" className="sport-selector__navigation-menu">
        <i className="fas fa-futbol" />
      </Link>

      <Link to="/countries/Basketball" className="sport-selector__navigation-menu">
        <i className="fas fa-basketball-ball" />
      </Link>

      <Link to="/countries/Baseball" className="sport-selector__navigation-menu">
        <i className="fas fa-baseball-ball" />
      </Link>

      <Link to="/countries/American_Football" className="sport-selector__navigation-menu">
        <i className="fas fa-football-ball" />
      </Link>

      <Link to="/countries/Handball" className="sport-selector__navigation-menu">
        <i className="far fa-futbol" />
      </Link>

      <Link to="/countries/Ice_Hockey" className="sport-selector__navigation-menu">
        <i className="fas fa-hockey-puck" />
      </Link>

      <Link data-testid="rugby-icon" to="/countries/Rugby" className="sport-selector__navigation-menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468 468"><path d="M429.3 87.3c-31.9-16.1-140.3-60.5-270.1 2.9 0 0-118 55.7-152.8 197 0 0-13 54.8-1.8 68.3 0 0 75.8 93.8 271.5 37.5 5.8-1.7 48-16.3 87.7-43.8 31.6-21.9 119.3-119.7 102-213.9 0 0-3.3-23.4-17.9-36.7C443.4 94.5 434.7 90 429.3 87.3zM434 128.1c-26.4 100.5-117.1 164.3-117.1 164.3 -81.6 65.7-216.5 60.5-255.4 57.5 -6-0.5-9.4-5.7-7.4-11.3 25.2-73.1 65.4-114.7 82.7-130.2 4.5-4 12.7-4.4 15.7 0.8 2.8 4.9 5.3 11.4 7 16.8 1.9 5.7 6.4 6.8 10.4 2.4l12.2-13.3c4-4.4 6.2-12.7 3.2-17.9 -1.6-2.8-3.5-5.8-5.3-8.5 -3.3-5-2.4-12 2.6-15.4 2-1.3 4.1-2.7 6.1-4 5-3.3 13-3 16.6 1.8 1.1 1.4 2.2 3 3.2 4.5 3.4 4.9 9.9 6 14.6 2.4l5.8-4.5c4.7-3.7 5.9-10.7 1.9-15.1 0 0 0 0-0.1-0.1 -4-4.5-3.2-10.3 2.3-12.7 2.3-1 4.9-2.1 7.2-3.1 5.5-2.3 13.9-1.7 17 2.9 3.1 4.6 9.2 6.6 14.1 4.1 4.9-2.5 6-7 3.3-10.7 -2.6-3.7-0.1-8.8 5.6-10.6 1-0.3 2-0.6 2.9-0.9 5.7-1.8 13.6-1.1 16.7 2.3 3.1 3.5 9 4.9 13.7 2.9 4.6-2 6.4-4.6 4.5-6.5s0.8-5.1 6.1-5.9c5.3-0.8 10.7 0.8 12.3 3 1.6 2.2 5.7 3.1 8.9 2.1 3.2-1 4.4-2.3 2.8-3.6 -1.5-1.3 2-3.9 7.9-4.9 2.7-0.4 5.6-0.8 8.3-1.1 5.9-0.7 6-1.9 0-2.4 -4.4-0.3-9.1-0.6-13.2-0.8 -6-0.3-11.8-1.9-13.5-3.2 -1.6-1.4-5-2.1-7.5-1.9 -2.4 0.3-3.1 1.2-2 2.7 1.1 1.4-3 2.5-9 2.7 -1.6 0-3.1 0.1-4.7 0.1 -6 0.2-12.3-1.5-14.6-3.4 -2.3-1.8-9.1-2.3-15-1.3l-0.8 0.1c-5.9 1-7.9 2.7-5.1 4.8 2.9 2.1 0.2 4.5-5.7 5.5 -2.4 0.4-4.9 0.8-7.2 1.2 -5.9 1-14.3-0.3-19-2.2 -4.7-1.9-12.6-1.9-17.4-0.2 -4.8 1.7-4.8 3.4-0.3 5.2 4.5 1.9 3.3 5.5-2.3 7.6l-14.1 5.2c-5.6 2.1-14 1.1-19.4-0.8 -5.4-1.9-14.2-1-19.6 1.6l-6.8 3.3c-5.4 2.6-4.9 5.1 0.6 7.3 5.5 2.2 5.7 7 0.6 10.2l-5.6 3.5c-5.1 3.1-13 3-18.3 1.1 -5.4-1.9-13.8-0.2-18.8 3.1l-13 8.9c-4.9 3.4-4.1 6.1 1.7 7.6 5.7 1.5 5.9 6.4 1.1 10 -24.9 18.8-59.1 57.1-73.7 73.9 -3.9 4.5-5.5 3.6-3.3-1.9 50.4-130.3 153.7-161.2 153.7-161.2 124.9-46.7 208.8-6.5 235.4 9.7C432.6 114.7 435.5 122.4 434 128.1z" /></svg>
      </Link>

    </nav>

  );
}
