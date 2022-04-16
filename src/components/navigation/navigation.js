import './navigation.scss';
// Image/Icon imports
import SiteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import SearchIcon from '../../assets/Icons/search.svg';
import ProfileImage from '../../assets/Images/Mohan-muruge.jpg';

function Navigation() {
    return (
        <nav  className="navigation">
            <a className="navigation__logo" href='./App.js'>
                <img 
                src={SiteLogo}
                alt="Brainflix"
                />
            </a>
            <div className="navigation__div">
                <input type="text" id="search" name="search" className="navigation__input" placeholder='Search'></input>
                <img
                className="icon__search" 
                src={SearchIcon}
                alt="search"
                />

                <div>
                    <form>
                        <label htmlFor="uploadFile" className="navigation__file--label">UPLOAD</label>
                        <input type="file" id="uploadFile" name="uploadFile" className="navigation__file"></input>
                    </form>

                    <img 
                    className="navigation__profile"
                    src={ProfileImage}
                    alt="User profile"
                    />
                </div>
                <img
                className='icon__upload' 
                src={uploadIcon}
                alt="upload"
                />
            </div>
        </nav>
    );
}

export default Navigation;