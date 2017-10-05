import React, {Component} from 'react';
import VideoListItem from './Video-list-item';
import ReactScrollbar from 'react-scrollbar-js';

export default class VideoList extends Component {

    render() {
        const {videos, onVideoSelect} = this.props,

            videoItems = videos.map(video => {
                return (
                    <VideoListItem
                        onVideoSelect={onVideoSelect}
                        key={video.id} video={video}/>
                )
            });
        return (
            <div>
                <ReactScrollbar className="scrollBar">
                    <div className="should-have-a-children scroll-me">
                        {videoItems}
                    </div>
                </ReactScrollbar>
            </div>
        )
    }
}
