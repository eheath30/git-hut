/* import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = ({ results: { user, repos } }) => ({
    type: 'LOAD_RESULT',
    payload: { user, repos }
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const longLat = await fetchLongLat(searchTerm);
            const riseSet = await fetchSunriseSunset(longLat);
            dispatch(loadResult(riseSet))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchLongLat = async searchTerm => {
    try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/capital/${searchTerm}`)
        return data[0].latlng;
    } catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid capital city!') }
        throw new Error(err.message)
    }
}

const fetchSunriseSunset = async ([latt, longt]) => {
    try {
        const { data } = await axios.get(`http://api.sunrise-sunset.org/json?lat=${latt}&lng=${longt}&date=today`);
        return data;
    } catch (err) {
        throw new Error(err.message)
    }
}
 */