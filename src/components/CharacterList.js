import React from 'react';
import './CharacterList.scss';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CharacterList = props => {
  const {data, query, specie}= props;
  return (
    <ul className="app__list">
      {data
      .filter(item => item.species.toUpperCase().includes(specie.toUpperCase()))
      .filter(item => item.name.toUpperCase().includes(query.toUpperCase()))
      .map(charac => {
        return (
          <li className="character" key={charac.id}>
            <Link to={`character/${charac.id}`}>
            <CharacterCard charac={charac}/>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired
}
export default CharacterList;