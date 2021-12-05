import { combineReducers } from 'redux';
import * as todoReducers from '../modules/Todo/reducers/todoReducers';

const allReducers = Object.assign({},
    todoReducers,
);

const reducers = combineReducers(allReducers);

export default reducers;