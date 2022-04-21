import './SideVideos.css';

function SideVideos(props) {
    const videoSelected = e => {
        props.videoSelected(props.id);
    }
    return(
        <div className="sidevideos" onClick={videoSelected}>
            <video 
                controls poster={props.image}
                className='sidevideos__video'
            />

            <div className='sidevideos__container'>
                <span className="sidevideos__title">{props.title}</span>
                <span className="sidevideos__uploader">{props.channel}</span>
            </div>
        </div>
    )
};

export default SideVideos;