import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';


const Home = props => {
    const {getQuery, data, query, specie, handleChecked} = props;
    return (
        <React.Fragment>
            <Filters 
            getQuery={getQuery}
            specie={specie}
            handleChecked={handleChecked}/>
            <CharacterList 
            data={data}
            query={query}
            handleChecked={handleChecked}
            specie={specie}/>
        </React.Fragment>
    );
};

Home.propTypes = {
    getQuery: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    query: PropTypes.string.isRequired,
    specie: PropTypes.string.isRequired,
    handleChecked: PropTypes.func.isRequired
}
export default Home;