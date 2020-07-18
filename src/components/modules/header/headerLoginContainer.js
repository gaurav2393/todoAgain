import React from 'react';
import {
    Link
} from 'react-router-dom';

var HeaderLoginContainer = (props) => {
    return (
        <div className="navigation-login-container">
            <ul className="navigation-login-list">
                <Link to='/singupexpert'>
                    <li>
                        Join Us As An Expert
                    </li>
                </Link>
                <Link to='/login'>
                    <li>
                        Login
                    </li>
                </Link>
                <Link to='/signup'>
                    <li>
                        Sign Up
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default HeaderLoginContainer;
