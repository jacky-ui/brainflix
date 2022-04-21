import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import '../NavigationIcons/NavigationIcons.css';

function NavigationIcons() {
    return(
        <>
        <img 
            className="icon__search"
            src={searchIcon}
        />
        <img
            className="icon__upload"
            src={uploadIcon}
        />
        </>
    )
};

export default NavigationIcons;