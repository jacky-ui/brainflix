import './App.scss';
import Navigation from './components/navigation/navigation.js';
import CreateVideo from './components/video/video.js';


function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <CreateVideo />
    </>
  );
}

export default App;
