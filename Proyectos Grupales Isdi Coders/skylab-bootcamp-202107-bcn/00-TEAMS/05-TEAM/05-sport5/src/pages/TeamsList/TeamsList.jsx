import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addFavouriteTeam, deleteFavouriteTeam } from '../../redux/actions/favourites.creator';

import './TeamsList.scss';
import { getTeams } from '../../redux/actions/sports.creator';

export default function TeamsList() {
  const allTeamsPerLeagueApi = useSelector((store) => store.sportsApi);
  const dispatch = useDispatch();
  const favourites = useSelector((store) => store.favourites);
  const { leagueId } = useParams();
  const [filterValue, setFilterValue] = useState('');
  const [allTeamsPerLeague, setTeams] = useState(allTeamsPerLeagueApi);

  useEffect(() => {
    dispatch(getTeams(leagueId));
  }, [leagueId]);
  useEffect(() => {
    setTeams(allTeamsPerLeagueApi);
  }, [allTeamsPerLeagueApi]);

  function teamIsInFavourites(teamId) {
    return favourites.favouriteTeams.some(({ id }) => id === teamId);
  }

  function changeFavouriteTeam(team, event) {
    const button = event.target;
    if (button.className.includes('active')) {
      dispatch(deleteFavouriteTeam(team.id));
    } else {
      dispatch(addFavouriteTeam(team));
    }
  }

  function filterTeams(value) {
    const inputValue = value;
    const filteredTeams = allTeamsPerLeagueApi.filter(
      (team) => team.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setTeams(filteredTeams);
    setFilterValue(inputValue);
  }

  return (
    <main className="team-list">
      <h2 className="team-list__title">{allTeamsPerLeague[0]?.league}</h2>
      <form>
        <input type="text" data-testid="filter-input" placeholder="Filter teams" value={filterValue} onChange={(event) => filterTeams(event.target.value)} />
      </form>
      <ul className="teams">
        {allTeamsPerLeague?.length && allTeamsPerLeague.map((team, index) => {
          const isFavourite = teamIsInFavourites(team.id);
          return (
            <li
              data-testid={`${team.name}-team-${index}`}
              key={team.name}
              className={isFavourite
                ? 'teams__team teams__team--top'
                : 'teams__team'}
            >
              <Link to={`/team/${team.id}`}>
                <img src={team.badge} alt={team.name} className="team__badge" />
                <span className="team__name">{team.name}</span>
              </Link>
              <button
                data-testid={`${team.name}-team-${index}-favourite`}
                className={isFavourite
                  ? 'teams__favourite-button teams__favourite-button--active'
                  : 'teams__favourite-button'}
                type="button"
                aria-label="Add to favourites"
                onClick={(event) => changeFavouriteTeam(team, event)}
              >
                <i className="fas fa-star" key={team.id} />
              </button>
            </li>
          );
        })}
      </ul>
    </main>

  );
}
