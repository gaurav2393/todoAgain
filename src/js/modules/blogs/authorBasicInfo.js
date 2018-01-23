import React from 'react';
import propTypes from 'prop-types';

function AuthorBasicInfo(props) {
    return(
        <div className="blog-author">
            <img src={props.imagePath} alt='author image'/>
            <div>
                <h2>{props.name} <span class="follow">Follow</span></h2>
                <p>
                    {props.shortDesc}
                </p>
                <p>
                    {props.date}
                    <span>{props.timeToRead} . read</span>
                </p>
            </div>
        </div>
    )
}

AuthorBasicInfo.propTypes = {
    date: propTypes.string,
    name: propTypes.string.isRequired,
    shortDesc: propTypes.string,
    timeToRead: propTypes.string,
    imagePath: propTypes.string
};

export default AuthorBasicInfo;
