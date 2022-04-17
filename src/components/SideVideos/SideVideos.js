import '../SideVideos/SideVideos.scss';
import JsonVideo from '../../assets/Data/videos.json';
import JsonVideoDatas from '../../assets/Data/video-details.json';

const firstVideo = JsonVideo[0];
const firstVideoPicture = firstVideo.image;
const firstVideoData = JsonVideoDatas[0];
const firstVideoComments = firstVideoData.comments[0];

function SideVideos(props) {

    // const sideVideos = JsonVideoDatas;
    return(
        <div className="side__container">
            <video 
                controls poster={props.image}
                className="side__video"
            />
            <div className="side__content">
                <span className="side__content--title">{props.title}</span>
                <span className="side__content--uploader">{props.channel}</span>
            </div>
        </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    //                 </div>

    //                 <div className="side__container">
    //                     <video 
    //                     controls poster={firstVideoPicture}
    //                     className="side__video"
    //                     />
    //                     <div className="side__content">
    //                         <span className="side__content--title">Become A Travel Pro In One Easy Lesson</span>
    //                         <span className="side__content--uploader">Todd Welch</span>
    //                     </div>
    // </div>
    )
};

export default SideVideos;