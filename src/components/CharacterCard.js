import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.scss';

const CharacterCard = props => {
    const {charac} = props;
    return (
        <div className="card">
            <h2 className="name__card">{charac.name}</h2>
            <div className="img__container">
                <img src={charac.image} alt={charac.name} className="img"/>
            </div>
            <p className="specie">{charac.species}</p>
        </div>
    );
};

CharacterCard.propTypes = {
    charac: PropTypes.object.isRequired
}
export default CharacterCard;