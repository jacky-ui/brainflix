import './Navigation.css';
import '../../styles/global.css';
import '../NavigationIcons/NavigationIcons.css';
import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadProfile from '../../assets/Images/Mohan-muruge.jpg';
import NavigationIcons from '../NavigationIcons/NavigationIcons';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav className="navigation">
            <img
                className="navigation__logo" 
                src={siteLogo}
                alt="navigation logo"
            />
            <div className="navigation__input">
                <input
                    className="navigation__input--search" 
                    type="text"
                    placeholder='Search'
                />

                <img 
                    className="navigation__input--profile"
                    src={uploadProfile}
                    alt="navigation profile"
                />
                <NavigationIcons />

                <Link to="/">
                    <a 
                        href="/"
                        className="navigation__input--label"
                    >UPLOAD</a>
                </Link>
                {/*<label htmlFor="uploadFile" className="navigation__input--label">UPLOAD</label>
    <input type="file" id="uploadFile" name="uploadFile" className="navigation__input--file"></input>*/}
            </div>
        </nav>
    )
};

export default Navigation;