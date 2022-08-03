import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = ({ result: { user } }) => ({
    type: 'LOAD_RESULT',
    payload: { user }
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const username = await fetchUsername(searchTerm);
            const userRepo = await fetchUserRepo(username);
            dispatch(loadResult(userRepo))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};


// Helpers
const fetchUsername = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}`)
        return data
    } catch (err) {

    }
}

const fetchUserRepo = async (user) => {
    try {
        const data = await axios.get(`https://api.github.com/users/${user}/repos`);
        console.log(data)
        return data
    } catch (err) {

    }
}
