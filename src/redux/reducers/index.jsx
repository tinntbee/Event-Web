import {combineReducers} from 'redux';
import miniGame from './miniGame';
import users from './users';

const rootReducer = combineReducers({
    users: users,
    miniGame: miniGame
})

export default rootReducer;