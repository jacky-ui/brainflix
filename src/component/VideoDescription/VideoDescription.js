import '../VideoDescription/VideoDescription.css';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

function VideoDescription(props) {
    return(
        <section className="description">
            <h2 className="description__header">{props.title}</h2>
            <div className="description__texts">
                <div className="description__container">
                    <p className="description__text--bold">{`By ${props.channel}`}</p>
                    <p className="description__text">{props.timestamp}</p>
                </div>

                <div className="description__container--align">
                    <p className="description__text description__text--align">{props.views}</p>
                    <p className="description__text">{props.likes}</p>
                    <img 
                        className="icon__views"
                        src={viewsIcon}
                        alt=""
                    />
                    <img 
                        className="icon__likes"
                        src={likesIcon}
                        alt=""
                    />
                </div>
            </div>

            <p className="description__paragraph">{props.description}</p>
        </section>
    )
};

export default VideoDescription;