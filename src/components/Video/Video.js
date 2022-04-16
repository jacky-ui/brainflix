// Imports
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoData from '../../assets/Data/video-details.json';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';
import CommentIcon from '../../assets/Icons/add_comment.svg';
import ProfileImage from '../../assets/Images/Mohan-muruge.jpg';
import './video.css';

const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoTitle = firstVideo.title;
const firstVideoData = JsonVideoData[0];
console.log(firstVideoData);

const formatTime = new Date(firstVideoData.timestamp).toLocaleDateString();
console.log(formatTime);

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
                    {firstVideoTitle}
                </h2>
                <section className="video__details--comments">
                    <div className="video__details--channel">
                        <p className="video__details--bold">{`By ${firstVideoData.channel}`}</p>
                        <p>{formatTime}</p>
                    </div>

                    <div className="video__details--channel">
                        <p className="video__details--paragraph">{firstVideoData.views}</p>
                        <img
                            className="icon__views" 
                            src={ViewsIcon}
                            alt=""
                        />
                        <p>{firstVideoData.likes}</p>
                        <img
                            className="icon__likes" 
                            src={LikesIcon}
                            alt=""
                        />
                    </div>
                    </section>
                    <section>
                        <p className="video__description">{firstVideoData.description}</p>
                        <p className="video__details--bold">3 Comments</p>

                        <div className="video__comments">
                            <img
                            className="video__comments--profile" 
                            src={ProfileImage}
                            />
                            
                            <label className="video__comments--header">JOIN THE CONVERSATION</label>
                            <input
                                className="video__comments--textarea" 
                                type="textarea"
                                placeholder='Add a new comment'
                            />
                            <button type='submit' className="video__comments--submit">COMMENT</button>
                            <img
                                className="icon__comment" 
                                src={CommentIcon}
                            />
                        </div>
                    </section>
            </section>
        </article>
        </>
    )
};
export default CreateVideo;