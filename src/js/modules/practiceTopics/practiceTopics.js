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
        this.gettopicsList(url[url.length - 1]);
    }

    getPracticeData(url) {
        fetch(`/${url}`, {
            method: 'GET'
        }).then(data => {
            return data.json();
        }).then(data => {
            console.log('quant data', data);
        })
    }

    gettopicsList(urlParam) {
        switch (urlParam) {
            case 'quantitativeAptitude': this.getPracticeData('quant');
                break;
            case 'verbal': this.getPracticeData('verbal');
                break;
            case 'reasoning': this.getPracticeData('reasoning');
                break;
            default: break;
        }
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
