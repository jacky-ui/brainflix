import axios from 'axios';
import { Component } from 'react';
import Comments from '../../component/Comments/Comments';
import Forms from '../../component/Forms/Forms';
import MainVideo from '../../component/MainVideo/MainVideo';
import SideVideos from '../../component/SideVideos/SideVideos';
import VideoDescription from '../../component/VideoDescription/VideoDescription';
import '../../styles/global.css';
import './HomePage.scss';

const API_URL="https://project-2-api.herokuapp.com/";
const API_KEY="?api_key=834dc594-6ea9-4eb2-bcd8-7bb30109cbc3";

class HomePage extends Component {
    state = {
        sideVideos: [], //This will be used for the video list on the side
        selectedVideos: null
    }

    getVideoDetails = (videoId) => {
        axios 
            .get(`${API_URL}videos/${videoId}/${API_KEY}`)
            .then((response) => {
                const selectedData = response.data;
                this.setState({
                    selectedVideos: selectedData
                });
            });
    }
    // `http://localhost:8080/videos`
    componentDidMount() {
        axios
            .get(`http://localhost:8080/videos`)
            .then((response) => {
                this.setState({
                    sideVideos: response.data
                })
                return response.data[0].id
            })
            .then(videoId => {
                this.getVideoDetails(videoId);
            });
    };

    componentDidUpdate(prevProps, prevState) {
        const currentVideoId = this.props.match.params.videoId

        if (currentVideoId !==prevProps.match.params.videoId) {
            const videoToBeSelected = currentVideoId;
            this.getVideoDetails(videoToBeSelected);
        }
    }

    

    render () {
        if (!this.state.selectedVideos) {
            return(
                <section>
                    <h1>Loading your content...</h1>
                </section>
            )
        }
        let commentLists = this.state.selectedVideos.comments;
        const filteredVideo = this.state.sideVideos.filter(video => video.id !== this.state.selectedVideos.id);

        return (
            <article>
                <MainVideo selectedVideos={this.state.selectedVideos}/>

                <section className="information__container">
                    <div className="information__forms">
                        <VideoDescription 
                            description={this.state.selectedVideos.description}
                            channel={this.state.selectedVideos.channel}
                            likes={this.state.selectedVideos.likes}
                            views={this.state.selectedVideos.views}
                            timestamp={this.state.selectedVideos.timestamp}
                            title={this.state.selectedVideos.title}
                            />

                        <Forms />
                        {commentLists.map(comment => {
                            return(
                                <Comments 
                                    key={comment.id}
                                    name={comment.name}
                                    timestamp={comment.timestamp}
                                    comment={comment.comment}
                                />
                            )
                        })}
                    </div>

                    <section className="information__nextvideos">
                        <span className="information__nextvideos--header">NEXT VIDEOS</span>
                        {filteredVideo.map(video => {
                            return(
                                <SideVideos 
                                    id={video.id}
                                    key={video.channel}
                                    title={video.title}
                                    channel={video.channel}
                                    image={video.image}
                                />
                            )
                        })}
                    </section>
                </section>
            </article>
        )
    }
};

export default HomePage;