import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryNavigation from './primaryNavigation';
import HeaderLoginContainer from './headerLoginContainer';
import HeaderLogoutContainer from './headerLogoutContainer';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
    const { userName, removeLogin } = this.props;

        return (
            <header>
                <div className="header-container">
                    <div className="logo">
                        <Link to='/'>
                            <img src="/images/logo.svg" alt="Website Logo" />
                        </Link>
                    </div>
                    <PrimaryNavigation/>
                    {userName ?
                        <HeaderLogoutContainer removeLogin={removeLogin} />
                        :<HeaderLoginContainer />
                    }
                </div>
            </header>
        )
    }
}

export default Header;
