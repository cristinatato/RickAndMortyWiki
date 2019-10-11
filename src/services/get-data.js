const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json';

const fetchData = () => {
    return fetch (ENDPOINT).then(res=>res.json())
};

export {fetchData};