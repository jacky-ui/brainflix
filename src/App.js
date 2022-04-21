import './App.css';
import './styles/global.css';
import Navigation from './component/Navigation/Navigation.js';
import Videos from './component/Videos/Videos';
import { Component } from 'react';
import JsonVideos from './assets/Data/videos.json';
import JsonVideoDetails from './assets/Data/video-details.json'

console.log(JsonVideos);
console.log(JsonVideoDetails);

class App extends Component {
  state = {
    videos: JsonVideos,
    selectedVideo: JsonVideoDetails[0]
  }

  handleSelectVideo = id => {
    this.setState({
      selectedVideo: JsonVideoDetails.find(video => video.id === id)
    })
  }

  render () {
    const videoLists = JsonVideos.filter(video => video.id !== this.state.selectedVideo.id);

    return (
      <>
      <header>
        <Navigation />
      </header>
      <Videos 
        videos={videoLists}
        videoSelected={this.handleSelectVideo}
        selectedVideo={this.state.selectedVideo}
      />
      </>
    );
  }
}

export default App;
