// Imports
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoData from '../../assets/Data/video-details.json';
import './video.css';
import CreateComments from '../Comments/comments.js';
import SideVideos from '../SideVideos/SideVideos.js';
import { render } from '@testing-library/react';

const VideoData = JsonVideo;
const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoData = JsonVideoData[0];
const firstVideoComments = firstVideoData.comments[0];
// console.log(firstVideoData);
// console.log(firstVideoComments);

console.log(VideoData);

class CreateVideo extends Component {
    state = {
        VideoData: Video
    }

    render() {
        return(
            <>
            {/* Current video display */}
            <article className="video">
                <section className="video__container">
                    <video 
                    controls poster={firstVideoPicture}
                    className="video__main"
                    />
                </section>
                <section className="noname">
                    {/* Import past comments */}
                    <CreateComments />
                    {/* Videos user can select from on the side */}
                    <SideVideos />
                </section>
            </article>
            </>
        )
    }
};
export default CreateVideo;