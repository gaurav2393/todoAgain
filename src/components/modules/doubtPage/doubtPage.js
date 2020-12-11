import React from 'react';
import { Link } from 'react-router-dom';
import UploadDocument from '../common/uploadDocument';
import {
	monthsArray,
	userType,
	expertRole,
	localStorage,
	name,
	email,
} from '../../utils/constants';
import { getCache } from '../../utils/cache';

class DoubtPage extends React.Component {
    constructor (props) {
		super(props);
		const storageUsertype = getCache(userType, localStorage);
        this.state = {
			threadDetails: null,
			userFields: {},
			userType: storageUsertype ? storageUsertype : '',
			expertFields: {}
        }
		this.getPageData = this.getPageData.bind(this);
		this.postExpertComment = this.postExpertComment.bind(this);
		this.expertUploadImage = this.expertUploadImage.bind(this);
		this.expertChange = this.expertChange.bind(this);
    }

    componentDidMount() {
        this.getPageData();
    }

    getPageData() {
        const { id } = this.props.match && this.props.match.params;
        fetch(`/alldoubts/${id}`, {
			method: 'GET'
		}).then(data => {
			return data.json();
		}).then(data => {
            this.setState({
                threadDetails: data
            })
        })
    }

    handleChange(event) {
		const userFields = Object.assign({}, this.state.userFields, { [event.target.name]: event.target.value });
		this.setState({
			userFields
		})
	}

	expertChange(event) {
		const expertFields = Object.assign({}, this.state.expertFields , { [event.target.name]: event.target.value });
		this.setState({
			expertFields
		})
	}

    fileOnChange(file) {
		const reader = new FileReader();

		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		reader.onload = () => {
			this.setState({
				fileObject:  URL.createObjectURL(file[0]),
				file
		})
		}
		file.forEach(tempFile => reader.readAsBinaryString(tempFile));	
	}
	
	expertUploadImage(expertFile) {
		const reader = new FileReader();

		reader.onabort = () => console.log('file reading was aborted');
		reader.onerror = () => console.log('file reading has failed');
		reader.onload = () => {
			this.setState({
				expertFileObject:  URL.createObjectURL(expertFile[0]),
				expertFile
			})
		}
		expertFile.forEach(tempFile => reader.readAsBinaryString(tempFile));	
	}

    addDocument(file) {
		var formBody = new FormData();
		formBody.append('file', file[0]);
		return fetch('/uploadDoubtImage', {
			method: 'POST',
			body: formBody
		}).then((data) => {
			return data.json();
		}).then(data=> {
			return data;
		})
	}

    async postExpertComment(e) {
		e.preventDefault();
		const { expertFile } = this.state;
		const { id } = this.props.match && this.props.match.params;
		if (expertFile) {
			const storageName = getCache(name, localStorage);
			const storageEmail = getCache(email, localStorage);
			const data = await this.addDocument(expertFile);
			const expertFields = Object.assign({}, this.state.expertFields);
			var date = new Date();
			// date will be stored in dd-mm-yyyy
			expertFields.docId = data ? data.Location : '';
			expertFields.createdDate = `${date.getDate()}-${monthsArray[date.getMonth()]}-${date.getFullYear()}`;
			expertFields.name = storageName;
			expertFields.email = storageEmail;
			fetch(`/alldoubts/expert/comment/${id}`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(expertFields)
			});
			return false;
		} else {
			this.setState({
				noImageUploaded: true
			})
		}
	}

    render () {
        const {
			threadDetails,
			fileObject,
			userFields,
			userType,
			expertFileObject,
		} = this.state;

        return (
            <div className="doubt-page-container">
				<h1>
					Have a new question? Click below to ask us.
				</h1>
				<UploadDocument
					fileOnChange={this.fileOnChange}
				/>
				<p className="doubt-status-container">
					<span>
						Question Status: 
					</span>
					<span className="doubt-status doubt-status-open">
						Open
					</span>
					<Link to='/singup'>
						<span className="for-more-updates">
							Sign Up to keep track all your doubts.
						</span>
					</Link>
				</p>
				{/* <p className="doubt-page-sign-up">
					<Link to='/singup'>
						Sign Up
					</Link>
				</p> */}
				<div className="question-thread">
					<div className="name-date">
						<p>
							{`${threadDetails ? 'Name: '+threadDetails.createdBy.name: '' }`}
						</p>
						<p>
							{threadDetails ? 'Created Date: ' + threadDetails.createdDate: ''}
						</p>
					</div>
					<div className="thread-description">
						<p>
							{threadDetails && threadDetails.threadDesc}
						</p>
					</div>
					<div className="image-container">
						{
							threadDetails && threadDetails.docsIds.length &&
							<img src={threadDetails.docsIds[0]} />
						}
					</div>
					{
						fileObject &&
						<div className="image-container">
							<img src={fileObject} />
						</div>
					}
				</div>
				{userType===expertRole && <div className="expert-section">
					<h2>
						Expert Section.
						<span>
							Provide your answer and any comments if you have.
						</span>
					</h2>
					<UploadDocument
						fileOnChange={this.expertUploadImage}
						title="Upload your answer"
					/>
					{expertFileObject &&
						<div className="image-container">
							<img src={expertFileObject} />
						</div>
					}
					<form onSubmit={this.postExpertComment} className="expert-comment-section">
						<div>
							<label htmlFor="expertDesc">
								Expert comments on the question.
							</label>
							<textarea
								placeholder="Enter your comment here"
								rows="5"
								name="expertDesc"
								id="expertDesc" onChange={this.expertChange}>
								{userFields.threadDesc}
							</textarea>
						</div>
						<div className="submit-content">
							<input
								type="submit"
								value="Submit"
							/>
						</div>
					</form>
				</div>}
				<div className="doubt-comments">
					<h2>
						<span>
							Comments
						</span>
					</h2>
					<form onSubmit={this.postComment} className="add-comment">
						<div>
							<label htmlFor="threadDesc">
								Description/additional comments you want to post along with the image.
								Looking for something very specific which you want to tell us.
							</label>
							<textarea
								placeholder="Enter your comment here"
								rows="5"
								name="threadDesc"
								id="threadDesc" onChange={this.handleChange}>
								{userFields.threadDesc}
							</textarea>
						</div>
						<div className="submit-content">
							<input
								type="submit"
								value="Submit"
							/>
						</div>
					</form>
				</div>
            </div>
        )
    }
}

export default DoubtPage;
