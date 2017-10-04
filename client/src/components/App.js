import '../styles/css/App.css';
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './Search-bar';
import VideoDetail from './Video-detail';
import VideoList from './Video-list';

export default class App extends Component {
    constructor() {
        super();
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
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )
    }
}
