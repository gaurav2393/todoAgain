import React from 'react';
import ThreadCard from './ThreadCard';

class DoubtsPageList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            threadsArray: []
        }
        this.getPageData = this.getPageData.bind(this);
    }

    componentDidMount() {
        this.getPageData();
    }

    getPageData() {
        fetch(`/alldoubts`, {
			method: 'GET'
		}).then(data => {
			return data.json();
		}).then(data => {
            this.setState({
                threadsArray: data ? data.data : []
            })
        })
    }

    render() {
        var { threadsArray } = this.state;
        return (
            <div className="doubt-lists-container">
                <ul className="doubt-lists">
                    {
                        threadsArray.map((threadData) => (
                            <ThreadCard
                                threadData={threadData}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default DoubtsPageList;
