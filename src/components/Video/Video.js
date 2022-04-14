import JsonVideo from '../../assets/Data/videos.json';
import './video.css';

const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
console.log(firstVideo);

function CreateVideo() {

    return(
        <>
        <article className="video">
            <div className="video__container">
                <video 
                controls poster={firstVideoPicture}
                className="video__main"
                />
            </div>
        </article>
        </>
    )
};
export default CreateVideo;