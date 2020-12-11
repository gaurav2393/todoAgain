import React from 'react';
import UploadDocument from '../common/uploadDocument';
import VideoContainer from '../common/VideoContainer';
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
		.catch(error => {
			console.log('Home js errored', error);
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
		}
	}

	render() {
		const { fileObject, userFields } = this.state;
		const { isLoggedIn } = this.props;

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
						<div className="home-upload-image-container">
							{
								fileObject &&
									<img src={fileObject} />
							}
						</div>
						{
							fileObject && !isLoggedIn &&
							<form onSubmit={this.handleSubmit} className="home-doubt-form-container">
								<div className="home-doubt-form-field">
									<label htmlFor="name">Name: *</label>
									<input name="name" id="name" onChange={this.handleChange}
										value={userFields.name} pattern="[a-zA-Z]+"
										required
										placeholder="Enter you name"
									/>
								</div>
								<div className="home-doubt-form-field">
									<label htmlFor="email">Email:</label>
									<input name="email" id="email"
										onChange={this.handleChange} type="email"
										value={userFields.email}
										placeholder="Enter your email"
									/>
								</div>
								<div className="home-doubt-form-field">
									<label htmlFor="phoneNumber">Phone Number:</label>
									<input name="phoneNumber" id="phoneNumber"
										pattern="[0-9]{+}" onChange={this.handleChange}
										value={userFields.phoneNumber}
										placeholder="Enter your phone number"
									/>
								</div>
								<div className="home-doubt-form-field">
									<label htmlFor="threadDesc">
										Any comments:
									</label>
									<textarea rows="7" name="threadDesc" id="threadDesc" onChange={this.handleChange}
										placeholder="Enter any other decriptiom about the question or any specific doubt you have"
									>
										{userFields.threadDesc}
									</textarea>
								</div>
								<div className="home-doubt-form-field">
									<input
										type="submit"
										value="Submit"
									/>
								</div>
							 </form>
						}
						
					</div>
					<div className="video-container-home">
						<VideoContainer
						/>
					</div>
				</div>
				<div>
					<a className="whatsapp-container" href="https://chat.whatsapp.com/DL2nfQ97BmA59PC7CdULZl" target="_blank">
						<p className="whatsapp-message">
							To get added to our whatsapp community. Click Here.
						</p>
						<img src="/images/svgs/whatsapp.svg" />
						<p className="whatsapp-extra-message">
							Discusstion Point. A pop-up form will be generated which will 
							allow them to fill details Mobile Number, Board, Class.
						</p>
					</a>
				</div>
				<div className="top-asked-container">
					<DoubtsPageList isHomePage />
				</div>
			</div>
		)
	}
}

export default Home;
