// Imports
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoData from '../../assets/Data/video-details.json';
import './video.css';

const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoTitle = firstVideo.title;
console.log(firstVideo);
console.log(firstVideoTitle);

function CreateVideo() {

    return(
        <>
        <article className="video">
            <section className="video__container">
                <video 
                controls poster={firstVideoPicture}
                className="video__main"
                />
            </section>
            <section className="video__details">
                <h2 className="video__details--title">
                    {firstVideo.title}
                </h2>
            </section>
        </article>
        </>
    )
};
export default CreateVideo;