import React from 'react';
import PrimaryNavigation from './primaryNavigation';

class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo">
                        <a>
                            <img src="images/logo.png" alt="Website Logo" />
                        </a>
                    </div>
                    <PrimaryNavigation/>
                </div>
            </header>
        )
    }
}

export default Header;
