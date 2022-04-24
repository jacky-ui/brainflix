<<<<<<< HEAD
import './Navigation.css';
import '../../styles/global.css';
import '../NavigationIcons/NavigationIcons.css';
import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadProfile from '../../assets/Images/Mohan-muruge.jpg';
import NavigationIcons from '../NavigationIcons/NavigationIcons';
=======
import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadProfile from '../../assets/Images/Mohan-muruge.jpg';
import NavigationIcons from '../NavigationIcons/NavigationIcons';
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../../styles/global.css';
import '../NavigationIcons/NavigationIcons.css';
>>>>>>> develop

function Navigation() {
    return(
        <nav className="navigation">
<<<<<<< HEAD
            <img
                className="navigation__logo" 
                src={siteLogo}
            />
=======
            <Link to="/">
            <img
                className="navigation__logo" 
                src={siteLogo}
                alt="navigation logo"
            />
            </Link>
>>>>>>> develop
            <div className="navigation__input">
                <input
                    className="navigation__input--search" 
                    type="text"
                    placeholder='Search'
                />

                <img 
                    className="navigation__input--profile"
                    src={uploadProfile}
<<<<<<< HEAD
                />
                <NavigationIcons />
                <label htmlFor="uploadFile" className="navigation__input--label">UPLOAD</label>
                <input type="file" id="uploadFile" name="uploadFile" className="navigation__input--file"></input>
=======
                    alt="navigation profile"
                />
                <NavigationIcons />

                <Link to="/upload">
                    <button
                        className="navigation__input--label"
                    >UPLOAD</button>
                </Link>
>>>>>>> develop
            </div>
        </nav>
    )
};

export default Navigation;