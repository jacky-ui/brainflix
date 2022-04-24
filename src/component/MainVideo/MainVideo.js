import '../MainVideo/MainVideo.css';

function MainVideo(props) {
    return(
        <section className="video">
            <video
                controls poster={props.selectedVideos.image}
                className="video__main"
            />
        </section>
    )
};

export default MainVideo;