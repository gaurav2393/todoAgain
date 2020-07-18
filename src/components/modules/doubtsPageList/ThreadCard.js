import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

var ThreadCard = (props) => {
    var { threadData } = props;
    return (
        <Fragment>
            <li className="thread-card">
                <Link to={`/doubts/${threadData.threadId}`}>
                    <span>
                        {threadData.name}
                    </span>
                    <span>
                        {threadData.threadDesc || ''}
                    </span>
                    <span>
                        {threadData.createdDate}
                    </span>
                </Link> 
            </li>
        </Fragment>
    )
}

export default ThreadCard;