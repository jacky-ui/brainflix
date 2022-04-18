import '../../components/Comments/comments.scss';
import CreateDescription from '../Description/description';


const CreateComments = (props) => {
    const { title, channel, likes, views, description, timestamp } = props.selectedVideos
    const formatTime = new Date(timestamp).toLocaleDateString();
    return(
        <section className="video__details">
                
                    <CreateDescription 
                        selectedVideos={props.selectedVideos}
                    />
                    <section className="comments">
                        <div className="comments__container">
                        <span className="comments__name">Micheal Lyons
                            <div className="comments__profile"></div>
                        </span>
                        <span className="comments__date">08/09/2021</span>
                        </div>
                        <p className="comments__paragraph">They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>

                        <div className="comments__container">
                            <span className="comments__name">Gary Wong
                                <div className="comments__profile"></div>
                            </span>
                            <span className="comments__date">07/15/2021</span>
                        </div>
                        <p className="comments__paragraph">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I cna really enjoy myself!</p>

                        <div className="comments__container">
                        <span className="comments__name">Theodore Duncan
                            <div className="comments__profile"></div>
                        </span>
                        <span className="comments__date">07/11/2021</span>
                        </div>
    <p className="comments__paragraph">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!</p>
                    </section>
            </section>
    )
};

export default CreateComments;