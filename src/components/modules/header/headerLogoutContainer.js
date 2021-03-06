import React from 'react';
import {
    Link
} from 'react-router-dom';
import { handleLogout } from '../../utils/commonFunctions';

const HeaderLogoutContainer = (props) => {
    const { removeLogin } = props;

    return (
        <div className="navigation-login-container">
            <ul className="navigation-login-list">
                <Link to='/singupexpert'>
                    <li>
                        Join Us As An Expert
                    </li>
                </Link>
                <li onClick={() => {handleLogout(); removeLogin();}}>
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default HeaderLogoutContainer;
