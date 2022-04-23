import { Component } from 'react';
import Comments from '../../component/Comments/Comments';
import Forms from '../../component/Forms/Forms';
import MainVideo from '../../component/MainVideo/MainVideo';
import SideVideos from '../../component/SideVideos/SideVideos';
import VideoDescription from '../../component/VideoDescription/VideoDescription';
import '../../styles/global.css';
import './HomePage.scss';

class HomePage extends Component {
    render () {
        return (
            <article>
                <MainVideo />

                <section className="information__container">
                    <div className="information__forms">
                        <VideoDescription />
                        <Forms />
                        <Comments />
                    </div>

                    <section className="information__nextvideos">
                    <span className="information__nextvideos--header">NEXT VIDEOS</span>
                    <SideVideos />
                    </section>
                </section>
            </article>
        )
    }
};

export default HomePage;