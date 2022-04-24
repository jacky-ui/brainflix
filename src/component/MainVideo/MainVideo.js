
import '../MainVideo/MainVideo.css';

function MainVideo(props) {
    return(
        <section className="video">
            <video
<<<<<<< HEAD
                controls poster={props.thisVideo}
=======
                controls poster={props.selectedVideos.image}
>>>>>>> develop
                className="video__main"
            />
        </section>
    )
};

export default MainVideo;