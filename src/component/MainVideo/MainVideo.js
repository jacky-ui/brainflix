
import '../MainVideo/MainVideo.css';

function MainVideo(props) {
    return(
        <section className="video">
            <video
                controls poster={props.thisVideo}
                className="video__main"
            />
        </section>
    )
};

export default MainVideo;