import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/css/App.css';
import React, {Component} from 'react';
import _ from 'lodash';
import SearchBar from '../components/Search-bar';
import VideoDetail from '../components/Video-detail';
import VideoList from '../components/Video-list';
import {videoSearch, clickVideo} from '../actions';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.videoSearch('cats');
    }

    videoSearch(term) {
        this.props.videoSearch(term);
    }

    render() {
        const {videos: {videos, selectedVideo}, clickVideo} = this.props,
            videoSearch = _.debounce(term => {
                this.props.videoSearch(term)
            }, 500);

        if (!videos) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div className="centerAll">
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={selectedVideo}/>
                <VideoList
                    onVideoSelect={video => clickVideo(video)}
                    videos={videos}
                />
            </div>
        )
    }
}

const mapStateToProps = ({videos}) => {
    return {videos}
};

const mapDispatchToProps = dispatch => {
    return {
        videoSearch: term => dispatch(videoSearch(term)),
        clickVideo: video => dispatch(clickVideo(video))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
