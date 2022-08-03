import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userSearchReducer from './reducers/userSearchReducer';

const store = createStore(userSearchReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;