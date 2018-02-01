import React from 'react';

class Header extends React.PureComponent {
    render() {
        return (
            <header>
                <div className="header-container">
                    <div className="logo">
                        <a>
                            <img src="images/logo.png" alt="Website Logo" />
                        </a>
                    </div>
                    <div className="primary-navigation">
                        <ul>
                            <li>
                                <a>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="accordion-button-required">
                                    Courses
                                </a>
                                <ul className="sub-navigation">
                                    <li>
                                        <a>

                                        </a>
                                    </li>
                                    <li>
                                        <a>

                                        </a>
                                    </li>
                                    <li>
                                        <a>

                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
