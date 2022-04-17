// Imports
import React from 'react';
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoDatas from '../../assets/Data/video-details.json';
import './video.css';
import CreateComments from '../Comments/comments.js';
import SideVideos from '../SideVideos/SideVideos.js';
import { render } from '@testing-library/react';
// import '../SideVideos/SideVideos.css';

const VideoDatas = JsonVideo;
const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoData = JsonVideoDatas[0];
const firstVideoComments = firstVideoData.comments[0];

const sideVideos = JsonVideoDatas;
// console.log(firstVideoData);

// class CreateVideo extends React.Component {
    // state = {
    //     VideoDatas: VideoDatas,
    //     initialVideo: VideoDatas[0]
    // }

    // userClickHandler = (id) => {
    //     const matchVideo = VideoDatas.find(VideoData => VideoData.id === id)
    //     this.setState({initialVideo: matchVideo})
    // };
function CreateVideo() {

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

                    <section className="side">
                    <h2 className="side__title">NEXT VIDEOS</h2>
                    {/* Videos user can select from on the side */}
                    {sideVideos.map((sideVideo) => (
                        <SideVideos 
                            key={sideVideo.id}
                            title={sideVideo.title}
                            channel={sideVideo.channel}
                            image={sideVideo.image}                    
                        />   
                    ))}
                    </section>
                </section>
            </article>
            </>
        )
};
export default CreateVideo;