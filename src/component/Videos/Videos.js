import MainVideo from '../MainVideo/MainVideo';
import VideoDescription from '../VideoDescription/VideoDescription';
import Forms from '../Forms/Forms';
import Comments from '../Comments/Comments.js';
import SideVideos from '../SideVideos/SideVideos';
import '../Videos/Videos.css';
import '../../styles/global.css';

function Videos(props) {
    const { title, description, comments, likes, image, views, channel } = props.selectedVideo
    return(
        <article>
            <MainVideo
                thisVideo={image}
            />

            <section className="information__container">
                <div className="information__forms">
                    <VideoDescription
                        description={description}
                        views={views}
                        likes={likes}
                        title={title}
                        channel={channel}
                    />
                    <Forms />
                    {comments.map(comment => {
                        return(
                            <Comments 
                                key={comment.name}
                                name={comment.name}
                                timestamp={comment.timestamp}
                                comment={comment.comment}
                            />
                        )
                    })}
                </div>

                <section className="information__nextvideos">
                    <span className="information__nextvideos--header">NEXT VIDEOS</span>
                    {props.videos.map(video => {
                        return(
                            <SideVideos
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                channel={video.channel}
                                image={video.image}
                                videoSelected={props.videoSelected}
                            />
                        )
                    })}

                </section>
            </section>
        </article>
    )
};

export default Videos;