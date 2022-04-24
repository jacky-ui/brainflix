import formsProfile from '../../assets/Images/Mohan-muruge.jpg';
import formsIcon from '../../assets/Icons/add_comment.svg';
import '../Forms/Forms.css';

function Forms() {
    return(
        <section className="forms">
            <p className="forms__amount">3 Comments</p>

            <div className="forms__inputs">
                <img
                    className="forms__profile"
                    src={formsProfile}
                    alt=""
                />

                <form className='forms__form'>
                    <label className="forms__form--header">JOIN THE CONVERSATION</label>
                    <textarea
                        className="forms__form--textarea"
                        placeholder="Add a new comment"
                    />
                    <button 
                        type="submit"
                        className="forms__form--submit"
                    >COMMENT</button>
                </form>
                <img 
                    className="icon__comment"
                    src={formsIcon}
                    alt=""
                />
            </div>
        </section>
    )
};

export default Forms;