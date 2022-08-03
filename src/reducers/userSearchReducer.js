const initState = {
    username: "",
    result: { user: ""},
    loading: false
};

const userSearchReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    };
};


export default userSearchReducer;