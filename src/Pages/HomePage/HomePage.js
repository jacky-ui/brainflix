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
        sideVideos: [],
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
                .get(`${API_URL}videos/${API_KEY}`)
                .then((result) => {
                    this.setState({
                        selectedVideos: result.data[0]
                    })
                })
    };

    render () {
        console.log(this.state.sideVideos);
        if (!this.state.selectedVideos && this.state.sideVideos) {
            return(
                <section>
                    <p>Loading your content...</p>
                </section>
            )
        }

        return (
            <article>
                <MainVideo selectedVideos={this.state.selectedVideos}/>

                <section className="information__container">
                    <div className="information__forms">
                        <VideoDescription />
                        <Forms />
                        <Comments />
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