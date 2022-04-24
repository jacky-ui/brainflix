import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadProfile from '../../assets/Images/Mohan-muruge.jpg';
import NavigationIcons from '../NavigationIcons/NavigationIcons';
import { Link } from 'react-router-dom';
import './Navigation.css';
import '../../styles/global.css';
import '../NavigationIcons/NavigationIcons.css';

function Navigation() {
    return(
        <nav className="navigation">
            <Link to="/">
            <img
                className="navigation__logo" 
                src={siteLogo}
                alt="navigation logo"
            />
            </Link>
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

                <Link to="/upload">
                    <button
                        className="navigation__input--label"
                    >UPLOAD</button>
                </Link>
            </div>
        </nav>
    )
};

export default Navigation;