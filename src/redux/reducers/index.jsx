import {combineReducers} from 'redux';
import home from './home';
import miniGame from './miniGame';
import users from './users';

const rootReducer = combineReducers({
    users: users,
    miniGame: miniGame,
    home: home
})

export default rootReducer;