import '../SideVideos/SideVideos.scss';
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoData from '../../assets/Data/video-details.json';

const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoData = JsonVideoData[0];
const firstVideoComments = firstVideoData.comments[0];

function SideVideos() {
    return(
        <section className="side">
                    <h2 className="side__title">NEXT VIDEOS</h2>
                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>

                    <div className="side__container">
                        <video 
                        controls poster={firstVideoPicture}
                        className="side__video"
                        />
                        <div className="side__content">
                            <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
                            <span className="side__content--uploader">Todd Welch</span>
                        </div>
                    </div>
                </section>
    )
};

export default SideVideos;