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

    componentDidMount() {
        axios
            .get(`${API_URL}videos/${API_KEY}`)
            .then((result) => {
                this.setState({
                    sideVideos: result.data
                })
            });
            axios 
                .get(`${API_URL}videos/84e96018-4022-434e-80bf-000ce4cd12b8/${API_KEY}`)
                .then((result) => {
                    console.log(result.data)
                    this.setState({
                        selectedVideos: result.data
                    })
                })
    };

    render () {
        if (!this.state.selectedVideos && this.state.sideVideos) {
            return(
                <section>
                    <p>Loading your content...</p>
                </section>
            )
        }
        let commentLists = this.state.selectedVideos.comments;
        console.log(commentLists);

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

                        {this.state.sideVideos.map(sideVideo => {
                            return(
                                <SideVideos 
                                    key={sideVideo.id}
                                    title={sideVideo.title}
                                    channel={sideVideo.channel}
                                    image={sideVideo.image}
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