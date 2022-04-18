import './App.scss';
import Navigation from './components/navigation/navigation.js';
import Video from './components/Video/Video';
import JsonVideo from './assets/Data/videos.json';
import JsonVideoData from './assets/Data/video-details.json';
import React from 'react';
import { Component } from 'react';
import CreateComments from './components/Comments/comments';

class App extends Component {
  state = {
    videos: JsonVideo,
    selectedVideo: JsonVideoData[0]
  }

  userClickHandler = (id) => {
    this.setState({
      selectedVideo: JsonVideoData.find(video => video.id === id)
    })
  };

  render() {
    const filteredVideo = JsonVideo.filter(video => video.id !== this.state.selectedVideo.id);

    return (
      <>
      <header>
        <Navigation />
      </header>
        <Video 
          videos={filteredVideo}
          videoSelected={this.userClickHandler}
          selectedVideos={this.state.selectedVideo}
        />
      </>
    );
  }
}

export default App;
