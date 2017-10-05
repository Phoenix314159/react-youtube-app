import type from './types';
import axios from 'axios';

export const videoSearch = term => async dispatch => {
    const response = await axios.get(`/api/search?term=${term}`);
    return dispatch({
        type: type.SEARCH_VIDEOS,
        payload: response.data
    })
};

export const selectVideo = video => dispatch => {
    return dispatch({
        type: type.SELECT_VIDEO,
        payload: video
    })

};

