import '../../components/Comments/comments.scss';
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';
import CommentIcon from '../../assets/Icons/add_comment.svg';
import ProfileImage from '../../assets/Images/Mohan-muruge.jpg';

import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoData from '../../assets/Data/video-details.json';

const firstVideo = JsonVideo[0];
const firstVideoTitle = firstVideo.title;
const firstVideoData = JsonVideoData[0];
const firstVideoComments = firstVideoData.comments[0];
console.log(firstVideoData);
console.log(firstVideoComments);

const formatTime = new Date(firstVideoData.timestamp).toLocaleDateString();
console.log(formatTime);

function CreateComments() {
    return(
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
                    <section className="video__comment--container">
                        <p className="video__description">{firstVideoData.description}</p>
                        <p className="video__details--bold">3 Comments</p>

                        <div className="video__comments">
                            <img
                            className="video__comments--profile" 
                            src={ProfileImage}
                            alt=""
                            />
                            
                            <label className="video__comments--header">JOIN THE CONVERSATION</label>
                            <div className="video__comments--text">
                                <input
                                    className="video__comments--textarea" 
                                    type="textarea"
                                    placeholder='Add a new comment'
                                />
                                <button type='submit' className="video__comments--submit">COMMENT</button>
                                <img
                                    className="icon__comment" 
                                    src={CommentIcon}
                                    alt=""
                                />
                            </div>
                        </div>
                    </section>
                    <section className="comments">
                        <div className="comments__container">
                            <span className="comments__name">Micheal Lyons
                            <div className="comments__profile"></div>
                            </span>
                            <span className="comments__date">08/09/2021</span>
                        </div>
                        <p className="comments__paragraph">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>

                        <div className="comments__container">
                            <span className="comments__name">Micheal Lyons
                                <div className="comments__profile"></div>
                            </span>
                            <span className="comments__date">08/09/2021</span>
                        </div>
                        <p className="comments__paragraph">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>

                        <div className="comments__container">
                        <span className="comments__name">Micheal Lyons
                            <div className="comments__profile"></div>
                        </span>
                        <span className="comments__date">08/09/2021</span>
                        </div>
                        <p className="comments__paragraph">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
                    </section>
            </section>
    )
};

export default CreateComments;