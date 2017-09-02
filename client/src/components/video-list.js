import React, {Component} from 'react';
import VideoListItem from './video-list-item';
import ReactScrollbar from 'react-scrollbar-js';

export default class VideoList extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let videoItems = this.props.videos.map(video => {
            return (
                <VideoListItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.id} video={video}/>
            )

        });
        let scrollBar = {
            'width': '500px',
            'height': '720px',
            'border': '2px solid black',
            'border-radius': '7pt'
        }
        return (
            <div>
                <ReactScrollbar style={scrollBar}>
                    <div className="should-have-a-children scroll-me">
                        {videoItems}
                    </div>
                </ReactScrollbar>
            </div>
        )
    }
}
