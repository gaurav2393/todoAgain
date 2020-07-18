import React from 'react';

class UploadDoubtForm extends React.Component {
	render() {
		const { handleChange, formData, handleSubmit } = this.props;

		return (
			<div className="upload-doubt-form-container">
				<form onSubmit={handleSubmit}>
					<div className="doubt-input-container">
						<label htmlFor="threadDesc">
							Description/additional comments you want to post along with the image.
							Looking for something very specific which you want to tell us.
						</label>
						<textarea rows="7" name="threadDesc" id="threadDesc" onChange={handleChange}>
							{formData.threadDesc}
						</textarea>
					</div>
					<div className="doubt-input-container upload-input-container">
						<label htmlFor="name">Name:</label>
						<input name="name" id="name" onChange={handleChange}
							value={formData.name} pattern="[a-zA-Z]+"
							required
						/>
					</div>
					<div className="doubt-input-container upload-input-container">
						<label htmlFor="email">Email:</label>
						<input name="email" id="email" onChange={handleChange} type="email" value={formData.email} required />
					</div>
					<div className="doubt-input-container upload-input-container">
						<label htmlFor="phoneNumber">Phone Number:</label>
						<input name="phoneNumber" id="phoneNumber" pattern="[0-9]{+}" onChange={handleChange} value={formData.phoneNumber} required />
					</div>
					<div className="doubt-input-container">
						<input
							type="submit"
							value="Submit"
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default UploadDoubtForm;