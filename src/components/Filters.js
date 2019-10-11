import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';


const Filters = props => {
    const {getQuery, handleChecked, specie} = props;
    return (
        <React.Fragment>
            <label className="label" htmlFor="search">Busca tu personaje</label>
            <input className="input" type="text" name="search" onChange={getQuery}/>
            <div className="container__select">
              <div>
                <label htmlFor="all">
                  <input
                    id="all"
                    type="radio"
                    value="all"
                    name="species"
                    onChange= {handleChecked}
                    checked={specie === ''}
                  />
                All
                </label>
              </div>
              <div>
                <label htmlFor="alien">
                  <input
                    id="alien"
                    type="radio"
                    value="Alien"
                    name="species"
                    onChange= {handleChecked}
                    checked={specie === 'Alien'}
                  />
                  Alien
                </label>
              </div>
              <div>
                <label htmlFor="human">
                  <input
                    id="human"
                    type="radio"
                    value="Human"
                    name="species"
                    onChange= {handleChecked}
                    checked={specie === 'Human'}
                  />
                  Human
                </label>
              </div>
            </div>
        </React.Fragment>
    );
};

Filters.propTypes = {
  getQuery: PropTypes.func.isRequired,
  handleChecked: PropTypes.func.isRequired,
  specie: PropTypes.string.isRequired
}
export default Filters;