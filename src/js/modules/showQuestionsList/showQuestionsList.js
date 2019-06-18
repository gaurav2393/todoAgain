import React from 'react';
import ShowQuestion from '../showQuestion';

class ShowQuestionsList extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			questionsList: []
		};
	}

	componentDidMount() {
		fetch('/addQuestions', {
			method: 'GET'
		}).then(data => {
			return data.json();
		}).then(data => {
			console.log('data', data);
			this.setState({
				questionsList: data
			});
		});
	}

	render() {
		const { questionsList } = this.state;
		return(
			<div className="show-question-list">
				{questionsList.length && questionsList.map((questionData, index) => (
					<ShowQuestion questionData={questionData} key={index} index={index} />
				))}
			</div>
		)
	}
}

export default ShowQuestionsList;
