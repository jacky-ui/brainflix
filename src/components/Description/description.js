import CreateCommentsInput from "../Comments/Comment-input/Comment-input";
import ViewsIcon from '../../assets/Icons/views.svg';
import LikesIcon from '../../assets/Icons/likes.svg';

const CreateDescription = (props) => {
    const { title, channel, likes, views, description, timestamp } = props.selectedVideos
    const formatTime = new Date(timestamp).toLocaleDateString();
    return (
        <>
            <h2 className="video__details--title">
                {title}
            </h2>
            <section className="video__details--comments">
                <div className="video__details--channel">
                    <p className="video__details--bold">{`By ${channel}`}</p>
                    <p>{formatTime}</p>
                </div>

                <div className="video__details--channel">
                    <p className="video__details--paragraph">{views}</p>
                    <img
                        className="icon__views" 
                        src={ViewsIcon}
                        alt=""
                    />
                    <p>{likes}</p>
                    <img
                        className="icon__likes" 
                        src={LikesIcon}
                        alt=""
                    />
                </div>
            </section>
            <section className="video__comment--container">
                <p className="video__description">{description}</p>
                <p className="video__details--bold">3 Comments</p>

                <CreateCommentsInput />
            </section>
        </>
    )
};

export default CreateDescription;