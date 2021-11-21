import {all} from 'redux-saga/effects';
import miniGameSaga from './miniGameSaga';

export default function* rootSaga(){
    yield all([
        miniGameSaga()
    ])
}