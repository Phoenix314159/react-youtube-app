import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    videos: searchReducer
});

export default rootReducer;
