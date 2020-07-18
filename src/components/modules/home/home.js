import React from 'react';
import {
	Link
} from 'react-router-dom';
import UploadDocument from '../common/uploadDocument';
import VideoContainer from '../common/VideoContainer';
import UploadDoubtForm from './UploadDoubtForm';
import { monthsArray } from '../../utils/constants';
import DoubtsPageList from '../doubtsPageList';

class Home extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			file: null,
			userFields: {
				name: '',
				email: '',
				phoneNumber: ''
			},
			fileObject: null,
			noImageUploaded: false
		}
		this.fileOnChange = this.fileOnChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	fileOnChange(file) {
		const reader = new FileReader()

		reader.onabort = () => console.log('file reading was aborted')
		reader.onerror = () => console.log('file reading has failed')
		reader.onload = () => {
			this.setState({
				fileObject:  URL.createObjectURL(file[0]),
				file
		})
		}
		file.forEach(tempFile => reader.readAsBinaryString(tempFile));	
	}

	handleChange(event) {
		const userFields = Object.assign({}, this.state.userFields, { [event.target.name]: event.target.value })
		this.setState({
			userFields
		})
	}

	async handleSubmit(e) {
		e.preventDefault();
		const { file } = this.state;
		if (file) {
			const data = await this.addDocument(file);
			const userFields = Object.assign({}, this.state.userFields);
			var date = new Date();
			// date will be stored in dd-mm-yyyy
			userFields.docId = data ? data.Location : '';
			userFields.createdDate = `${date.getDate()}-${monthsArray[date.getMonth()]}-${date.getFullYear()}`;
			fetch('/createThread', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userFields)
			})
			return false;
		} else {
			this.setState({
				noImageUploaded: true
			})
		}
	}

	render() {
		const { fileObject, userFields, noImageUploaded } = this.state;

		return (
			<div className="home-container">
				<div className="home-upload-container">
					<div className="upload-document-home">
						<h1>
							Stuck on a Doubt?
						</h1>
						<p className="upload-document-text">
							Upload it here and continue your learning.
						</p>
						<UploadDocument
							fileOnChange={this.fileOnChange}
						/>
					</div>
					<div className="video-container-home">
						<VideoContainer
						/>
					</div>
				</div>
				<div className="whatsapp-container">
					<p className="whatsapp-message">
						To get added to our whatsapp community. Click Here.
					</p>
					<img src="/images/svgs/whatsapp.svg" />
					<p className="whatsapp-extra-message">
						Discusstion Point. A pop-up form will be generated which will 
						allow them to fill details Mobile Number, Board, Class.
					</p>
				</div>
				<div className="top-asked-container">
					<h2>
						Top Asked Questions
					</h2>
					<DoubtsPageList />
					<div className="view-all-doubts">
						<Link to='/doubts'>
							View All
						</Link>
					</div>
				</div>
				{
					fileObject &&
						<img src={fileObject} />
				}
				<UploadDoubtForm
					formData={userFields}
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					noImageUploaded={noImageUploaded}
				/>
			</div>
		)
	}
}

export default Home;
