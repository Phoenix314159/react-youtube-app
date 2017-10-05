import type from '../actions/types';
import _ from 'lodash';

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SEARCH_VIDEOS:
            return {...state, videos: action.payload, selectedVideo: action.payload[0]};
        case type.SELECT_VIDEO:
            return {...state, selectedVideo: _.find(state.videos, video => {return video === action.payload})};
        default:
            return state;
    }
};

export default searchReducer;
