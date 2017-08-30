import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    }
    async componentDidMount() {
        let res = await axios.get('/api/search?term=cats');
        this.setState({
            videos: await res.data.splice(1),
            selectedVideo: await res.data[0]
        });
    }
    async videoSearch(term) {
        let res = await axios.get(`/api/search?term=${term}`);
        this.setState({
            videos: await res.data,
            selectedVideo: await res.data[0]
        });
    }
    render() {
        const videoSearch = _.debounce(term => {
            this.videoSearch(term)
        }, 500);
        return (
            <div>
                <h3 className="header">Search For Videos</h3>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));


