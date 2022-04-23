import '../Comments/Comments.css';

function Comments(props) {
    const formatTime = new Date(props.timestamp).toLocaleDateString();
    console.log(props);
    return(
        <section className="comments">
            <div className="comments__profile"></div>
            <div className="comments__wrapper">
                <div className="comments__container">
                    <span className="comments__container--name">{props.name}</span>
                    <span className="comments__container--date">{formatTime}</span>
                </div>
                <p className="comments__review">{props.comment}</p>
            </div>
        </section>
    )
};

export default Comments;