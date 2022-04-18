// Imports
import React from 'react';
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoDatas from '../../assets/Data/video-details.json';
import './video.css';
import CreateComments from '../Comments/comments.js';
import SideVideos from '../SideVideos/SideVideos.js';
import CreateDescription from '../Description/description';
import { render } from '@testing-library/react';

const VideoDatas = JsonVideo;
const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoData = JsonVideoDatas[0];
const firstVideoComments = firstVideoData.comments[0];

const sideVideos = JsonVideoDatas;

const CreateVideo = (props) => {
    const { image, channel, description, likes, views, title, id, comments} = props.selectedVideos;
    console.log(comments)
        return(
            <>
            {/* Current video display */}
            <article className="video">
                <section className="video__container">
                    <video 
                    controls poster={image}
                    className="video__main"
                    />
                </section>
                <section className="noname">
                    {/* Import past comments */}
                            <CreateComments
                                // key={comment.timestamp} 
                                selectedVideos={props.selectedVideos}
                                // commentName={comment.name}
                                // commentcomment={comment.comment}
                                // commenttimestamp={comment.timestamp}
                    />
                    <section className="side">
                    <h2 className="side__title">NEXT VIDEOS</h2>
                    {/* Videos user can select from on the side */}
                    {props.videos.map(video => {
                        return (
                        <SideVideos 
                            key={video.id}
                            title={video.title}
                            channel={video.channel}
                            image={video.image}  
                            userClickHandler={props.userClickHandler}                  
                        /> 
                        )  
                    })}
                    </section>
                </section>
            </article>
            </>
        )
};
export default CreateVideo;

