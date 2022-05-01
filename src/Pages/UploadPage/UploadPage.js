import uploadPicture from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Icons/publish.svg';
import './UploadPage.scss';
import '../../styles/global.scss';
import axios from 'axios';

function UploadPage(props) {
    const handleUserPost = (event) => {
        event.preventDefault();
        console.log(event.target.title.value)
        axios
            .post("http://localhost:8080/videos", {
                title: event.target.title.value,
            });
        event.target.reset();
        alert("Upload Successful! Click 'ok' to return!");
        props.history.push("/");
    };

    const handleUserSubmit = (event) => {
        console.log(event.target)
        alert("Upload Successful! Click 'ok' to return!");
        props.history.push("/");
    };

    const handleUserCancel = (e) => {
        props.history.push("/")
    };

    return (
        <article className="upload">
            <section className="upload--padding">
                <h1 className="upload__header">Upload Video</h1>

                <section className="upload__container">
                    <div className="upload--spacing">
                        <span className="upload__subhead">VIDEO THUMBNAIL</span>
                        <img 
                            src={uploadPicture}
                            className="upload__image"
                            alt="upload"
                        />
                    </div>

                    <form className="upload__form" onSubmit={handleUserPost}>
                        <label className="upload__form--title" htmlFor='title'>TITLE YOUR VIDEO</label>
                        <input 
                            className="upload__form--text"
                            type="text"
                            placeholder='Add a title to your video'
                            id="title"
                            name="title"
                        />
                        <label className="upload__form--title">ADD A VIDEO DESCRIPTION</label>
                        <textarea 
                            className="upload__form--textarea"
                            placeholder='Add a description to your video'
                        />
                        <span className="upload__form--border"></span>
                        <button className="upload__form--submit" onSubmit={handleUserSubmit}>PUBLISH</button>
                        <button className="upload__form--cancel" onClick={handleUserCancel}>CANCEL</button>
                        <img
                            className="icon__publish" 
                            src={publishIcon}
                            alt="publish icon"
                        />
                    </form>
                </section>
            </section>
        </article>
    )
};

export default UploadPage;