import uploadPicture from '../../assets/Images/Upload-video-preview.jpg';
import publishIcon from '../../assets/Icons/publish.svg';
import './UploadPage.scss';
import '../../styles/global.scss';
import { Redirect } from 'react-router-dom';

function UploadPage(props) {
    const handleUserSubmit = (e) => {
        alert("Upload Successful! Click 'ok' to return!")
        props.history.push("/")
    }

    const handleUserCancel = (e) => {
        props.history.push("/")
    }

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

                    <div className="upload__form">
                        <label className="upload__form--title">TITLE YOUR VIDEO</label>
                        <input 
                            className="upload__form--text"
                            type="text"
                            placeholder='Add a title to your video'
                        />
                        <label className="upload__form--title">ADD A VIDEO DESCRIPTION</label>
                        <textarea 
                            className="upload__form--textarea"
                            placeholder='Add a description to your video'
                        />
                        <span className="upload__form--border"></span>
                        <button type="submit" className="upload__form--submit" onClick={handleUserSubmit}>PUBLISH</button>
                        <button className="upload__form--cancel" onClick={handleUserCancel}>CANCEL</button>
                        <img
                            className="icon__publish" 
                            src={publishIcon}
                            alt="publish icon"
                        />
                    </div>
                </section>
            </section>
        </article>
    )
};

export default UploadPage;