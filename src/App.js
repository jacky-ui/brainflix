import Navigation from './component/Navigation/Navigation.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import UploadPage from './Pages/UploadPage/UploadPage.js';
import './App.css';
import './styles/global.css';

function App() {
  return(
    <BrowserRouter>

        <header>
          <Navigation />
        </header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/upload" component={UploadPage} />
        <Route path="/video/:videoId" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
