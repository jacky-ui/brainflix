import '../SideVideos/SideVideos.scss';

const SideVideos = (props) => {
    const userClickHandler = e => {
        e.preventDefault();
        props.onSelectedVideo(props.id)
    }

    return (
        <div className="side__container" onClick={userClickHandler}>
            <video 
                controls poster={props.image}
                className="side__video"
            />
            <div className="side__content">
                <span className="side__content--title">{props.title}</span>
                <span className="side__content--uploader">{props.channel}</span>
            </div>
        </div>
    );
};

export default SideVideos;