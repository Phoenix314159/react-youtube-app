import type from '../actions/types';

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SEARCH_VIDEOS:
            return {...state, videos: action.payload, selectedVideo: action.payload[0]};
        case type.SELECT_VIDEO:
            let singleVideo = [];
                state.videos.map(a => {
                    if (a === action.payload) {
                        singleVideo.push(a);
                    }
                });
            return {...state, selectedVideo: singleVideo[0]};
        default:
            return state;
    }
};

export default searchReducer;
