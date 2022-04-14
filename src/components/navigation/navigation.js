import './navigation.scss';
// Image/Icon imports
import siteLogo from '../../assets/Logo/BrainFlix-logo.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import searchIcon from '../../assets/Icons/search.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';

function Navigation() {
    return (
        <header>
            <section className="navigation">
                <a className="navigation__logo" href='./App.js'>
                    <img 
                    src={siteLogo}
                    alt="Brainflix"
                    />
                </a>
                <div className="navigation__div">
                    <input type="text" id="search" name="search" className="navigation__input" placeholder='Search'></input>
                    <img
                    className="icon__search" 
                    src={searchIcon}
                    alt="search"
                    />

                    <div>
                        <form>
                            <label htmlFor="uploadFile" className="navigation__file--label">UPLOAD</label>
                            <input type="file" id="uploadFile" name="uploadFile" className="navigation__file"></input>
                        </form>

                        <img 
                        className="navigation__profile"
                        src={profileImage}
                        alt="User profile"
                        />
                    </div>
                    <img
                    className='icon__upload' 
                    src={uploadIcon}
                    alt="upload"
                    />
                </div>
            </section>
        </header>
    );
}

export default Navigation;