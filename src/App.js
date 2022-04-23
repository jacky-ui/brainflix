import './App.css';
import './styles/global.css';
import Navigation from './component/Navigation/Navigation.js';
import Videos from './component/Videos/Videos';
import { Component } from 'react';
import JsonVideos from './assets/Data/videos.json';
import JsonVideoDetails from './assets/Data/video-details.json'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import UploadPage from './Pages/UploadPage/UploadPage.js';

function App() {
  return(
    <BrowserRouter>

      <header>
        <Navigation />
      </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </BrowserRouter>
  )
};

{/*class App extends Component {
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
      <BrowserRouter>

        <header>
          <Navigation />
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" component={UploadPage} />
          <Videos 
            videos={videoLists}
            videoSelected={this.handleSelectVideo}
            selectedVideo={this.state.selectedVideo}
          />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}*/}

export default App;
