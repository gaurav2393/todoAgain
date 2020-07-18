import React from 'react';
import PrimaryNavigation from './primaryNavigation';
import HeaderLoginContainer from './headerLoginContainer';
import HeaderLogoutContainer from './headerLogoutContainer';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
    const { userName } = this.props;

        return (
            <header>
                <div className="header-container">
                    <div className="logo">
                        <a>
                            <img src="/images/logo.svg" alt="Website Logo" />
                        </a>
                    </div>
                    <PrimaryNavigation/>
                    {userName ?
                        <HeaderLogoutContainer />
                        :<HeaderLoginContainer />
                    }
                </div>
            </header>
        )
    }
}

export default Header;
