import { combineReducers } from 'redux';
import initialState from './initialState';
import start from './start';

const reducer = combineReducers({
    initialState,
    start
});
export default reducer;