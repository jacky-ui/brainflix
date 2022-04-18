import CommentIcon from '../../../assets/Icons/add_comment.svg';
import ProfileImage from '../../../assets/Images/Mohan-muruge.jpg';
import '../comments.css';

function CreateCommentsInput() {
    return(
        <div className="video__comments">
            <img
                className="video__comments--profile" 
                src={ProfileImage}
                alt=""
            />
            <label className="video__comments--header">JOIN THE CONVERSATION</label>
            <div className="video__comments--text">
                <input
                    className="video__comments--textarea" 
                    type="textarea"
                    placeholder='Add a new comment'
                />
                <button type='submit' className="video__comments--submit">COMMENT</button>
                <img
                    className="icon__comment" 
                    src={CommentIcon}
                    alt=""
                />
            </div>
        </div>
    )
};

export default CreateCommentsInput;