import './App.scss';
import Navigation from './components/navigation/navigation.js';
import Video from './components/Video/Video';
import JsonVideo from './assets/Data/videos.json';
import JsonVideoData from './assets/Data/video-details.json';
import React from 'react';

const VideoDatas = JsonVideo;
const VideoDetails = JsonVideoData;

class App extends React.Component {
  state = {
    VideoDatas: VideoDatas,
    InitialVideo: VideoDatas[0]
  }

  userClickHandler = (id) => {
    const matchVideo = VideoDatas.find(VideoData => VideoData.id === id)
    this.setState({InitialVideo: matchVideo})
  };

  render() {
    return (
      <>
      <header>
        <Navigation />
      </header>
        <Video userClickHandler={this.userClickHandler} VideoDatas={this.state.VideoDatas}/>
      </>
    );
  }
}

export default App;
