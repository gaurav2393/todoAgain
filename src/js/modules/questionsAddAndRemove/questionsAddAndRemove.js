import React from 'react';
import ShowQuestions from '../showQuestions';

class QuestionsAddAndRemove extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit() {
        fetch('/addQuestions', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: this.state.value
        });
    }

    render() {
        return(
            <div>
                <textarea className="questions-textarea" onChange={this.handleChange} rows="25" cols="50">
                    {this.state.value}
                </textarea>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
                <ShowQuestions />
            </div>
        )
    }
}

export default QuestionsAddAndRemove;
