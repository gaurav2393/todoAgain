import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadDocument = ({ fileOnChange }) => {
	const onDrop = useCallback(acceptedFiles => {
		const reader = new FileReader()

		reader.onabort = () => console.log('file reading was aborted')
		reader.onerror = () => console.log('file reading has failed')
		reader.onload = () => {
			// Do whatever you want with the file contents
			const binaryStr = reader.result
			console.log('binary string uploaded', binaryStr);
		}

		acceptedFiles.forEach(file => reader.readAsBinaryString(file));
		fileOnChange(acceptedFiles);
	}, []);

	const {getRootProps, getInputProps} = useDropzone({
		onDrop,
		accept: 'image/jpeg, image/png'
	});

	return (
		<div className="drag-drop-file">
			<div className="drag-upload-container" {...getRootProps()}>
				<input {...getInputProps()} />
				<span>
					Upload Your Question Here
				</span>
				<img src="/images/svgs/camera.svg" alt="camera image to upload" />
			</div>
		</div>
	)
}

export default UploadDocument;