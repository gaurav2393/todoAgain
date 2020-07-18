import React from 'react';
import { Link } from 'react-router-dom';
import UploadDocument from '../common/uploadDocument';
import { monthsArray } from '../../utils/constants';
'..'
class DoubtPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
			threadDetails: null,
			userFields: {}
        }
        this.getPageData = this.getPageData.bind(this);
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
		const userFields = Object.assign({}, this.state.userFields, { [event.target.name]: event.target.value })
		this.setState({
			userFields
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
    
    async createComment(e) {
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

    render () {
        const { threadDetails, fileObject, userFields } = this.state;

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
				<div className="doubt-comments">
					<h2>
						<span>
							Comments
						</span>
					</h2>
					<form onSubmit={this.createComment} className="add-comment">
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
