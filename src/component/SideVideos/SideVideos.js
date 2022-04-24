import { Link } from 'react-router-dom';
import './SideVideos.css';

function SideVideos(props) {
    {/*const videoSelected = e => {
        props.videoSelected(props.id);
    }*/}
    return(
        <Link to={`/video/${props.id}`}>
        <div className="sidevideos" key={props.id}>
            <img 
                src={props.image}
                className='sidevideos__video'
                alt=""
            />

            <div className='sidevideos__container'>
                <span className="sidevideos__title">{props.title}</span>
                <span className="sidevideos__uploader">{props.channel}</span>
            </div>
        </div>
        </Link>
    )
};

export default SideVideos;