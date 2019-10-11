import React from 'react';
import './CharacterDetail.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    const { data, routerProps } = props;
    const characId = parseInt(routerProps.match.params.id);
    const character = data.filter(item => item.id === characId);

    if (characId > data.length) {
        return (
            <div>
                <p className="info">La página de detalle que estás buscando no existe o no está disponible</p>
                <Link to="/" className="link"><i className="fas fa-arrow-left"></i>Volver</Link>
            </div>
        );
    }

    if (character[0]) {
        const { name, image, species, status, origin, episode } = character[0];
        return (
            <React.Fragment>
                <div className="container__detail">
                    <div className="container__card">
                        <div className="img__container-detail">
                            <img className="img__detail" src={image} alt={name} />
                        </div>
                        <div className="container__details">
                            <h2 className="name__detail">{name}</h2>
                            <p className="specie__detail">Specie: <i className={species === 'Human' ? "fas fa-male" :
                            "fab fa-reddit-alien"}></i></p>
                            <p className="status__detail">Status: <i className={status === 'Alive' ? "fas fa-heartbeat" : "fas fa-skull-crossbones"}></i></p>
                            <p className="origin__detail">Origin: {origin.name ? origin.name : 'Unknown'}</p>
                            <p className="episodes__detail">Episodes: {episode.length ? episode.length : 'Unknown'}</p>
                        </div>
                        <Link className="link" to="/"><i className="fas fa-arrow-left"></i>Back</Link>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p className="link">No hay más personajes</p>
                <Link className="link" to="/">Back</Link>
            </React.Fragment>
        );
    }
};


CharacterDetail.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    routerProps: PropTypes.object.isRequired
}
export default CharacterDetail;