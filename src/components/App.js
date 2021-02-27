import React from 'react';
import api from '../api/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

class App extends React.Component {

    state = { videos: [], slectedVideo: null}

    onTermSubmit = async term => {
        const response = await api.get('/search', {
          params: { q: term }
        })
        console.log(response)
        this.setState({ videos: response.data.items})
    }

    onVideoSelect = (video) => {
        console.log('From the App', video)
    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoList onVideoSelect={this.onVideoSelect} videos= {this.state.videos}/>
        </div>
        )
    }
}


export default App