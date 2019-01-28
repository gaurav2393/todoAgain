import React from 'react';

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
        fetch('/courses/todosCourses', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({a: 1, b: 'Textual content'})
        });
    }

    render() {
        return(
            <div>
                <textarea onChange={this.handleChange} rows="4" cols="50">
                    {this.state.value}
                </textarea>
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}

export default QuestionsAddAndRemove;
