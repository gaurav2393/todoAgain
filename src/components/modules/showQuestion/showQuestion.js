import React from 'react';

const ShowQuestion = props => {
	return (
		<div className="show-question-container">
			<p className="question-sentence">
				{props.index+1}. {props.questionData.questionName}
			</p>
			{ props.questionData.answerOptions.map(option => (
				<div className="answer-option">
					<input type="radio" id={option} name={props.questionData._id} /><label htmlFor={option}> {option} </label>
				</div>
			))}
		</div>
	)
}

export default ShowQuestion;