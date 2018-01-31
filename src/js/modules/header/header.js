import React from 'react';

class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src="images/logo.png" alt="Website Logo" />
                    <p className="brand-name">My Website</p>
                </div>
            </header>
        )
    }
}

export default Header;
