import '../styles/css/App.css';
import React, {Component} from 'react';
import _ from 'lodash';
import SearchBar from '../components/Search-bar';
import VideoDetail from '../components/Video-detail';
import VideoList from '../components/Video-list';
import {videoSearch, selectVideo} from '../actions';
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.videoSearch('mountains');
    }

    videoSearch(term) {
        this.props.videoSearch(term);
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.props.videoSearch(term)
        }, 500);

        if(!this.props.videos.videos) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.props.videos.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.props.selectVideo(selectedVideo)}
                    videos={this.props.videos.videos}
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
        selectVideo: video => dispatch(selectVideo(video))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
