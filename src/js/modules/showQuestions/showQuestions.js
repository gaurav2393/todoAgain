import React from 'react';

class ShowQuestions extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        fetch('/addQuestions', {
            method: 'GET'
        }).then(data => {
            return data.json();
        }).then(data => {
            console.log('lets see the data', data);
        });
    }

    render() {
        return(
            <div>
                <code>
                    data will come here
                </code>
            </div>
        )
    }
}

export default ShowQuestions;
