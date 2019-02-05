import React from 'react';

class PracticeTopics extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            topicsList: []
        }
    }

    componentDidMount() {
        let url = window.location.href.split('/');
        // gettopicsList(url[url.length - 1]);
        this.setState({
            topicsList: [{
                topicName: 'Time and Distance',
                topicLink: 'timeAndDistance'
            }, {
                topicName: 'Geometry',
                topicLink: 'geometry'
            }, {
                topicName: 'Trigonometry',
                topicLink: 'trigonometry'
            }, {
                topicName: 'Time and Distance',
                topicLink: 'timeAndDistance'
            }, {
                topicName: 'Geometry',
                topicLink: 'geometry'
            }, {
                topicName: 'Trigonometry',
                topicLink: 'trigonometry'
            }]
        })
    }

    render() {
        return (
            <p>
                Something
            </p>
        )
    }
}

export default PracticeTopics;
