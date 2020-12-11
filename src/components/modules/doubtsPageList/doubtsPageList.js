import React, { Fragment } from 'react';
import {
	Link
} from 'react-router-dom';
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
        var { isHomePage } = this.props;

        return (
            <Fragment>
                { threadsArray.length ?
                    (
                        <Fragment>
                            {isHomePage && <h2>
                                Top Asked Questions
                            </h2>}
                            <div className="doubt-lists-container">
                                {!isHomePage && <h1>
                                    Recently Asked Questions
                                </h1>}
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
                            {isHomePage && <div className="view-all-doubts">
                                <Link to='/doubts'>
                                    View All Questions
                                </Link>
                            </div>}
                        </Fragment>
                    ) : null
                }
            </Fragment>
        )
    }
}

export default DoubtsPageList;
