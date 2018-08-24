import React from 'react';
import _ from 'lodash';

class primaryNavigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleNavMobile = this.toggleNavMobile.bind(this);
    }

    showSubNavigation(event) {
        event.currentTarget.classList += ' show-sub-navigation';
    }

    hideSubNavigation(event) {
        event.currentTarget.classList.remove('show-sub-navigation');
    }

    toggleNavMobile() {
        if(this.refs.primaryNavigation.className.indexOf('display-block')>-1) {
            this.refs.primaryNavigation.classList.remove('display-block');
            this.refs.burgerMenu.classList.remove('menu-active');
        } else {
            this.refs.primaryNavigation.classList += ' display-block';
            this.refs.burgerMenu.classList += ' menu-active';
        }
    }

    render() {
        return (
            <div>
                <nav ref="primaryNavigation" className="primary-navigation">
                    <ul>
                        <li className="nav-level-1">
                            <a>
                                Home
                            </a>
                        </li>
                        <li className="nav-level-1 has-sub-navigation" onMouseOver={this.showSubNavigation} 
                            onMouseOut={this.hideSubNavigation} >
                            <a className="accordion-button-required">
                                Courses
                            </a>
                            <ul className="sub-navigation"  onMouseOver={this.showSubNavigation}
                                onMouseOut={this.hideSubNavigation} >
                                <li>
                                    <a>
                                        level2 - 1
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    level2 - 2                                            
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    level2 - 3                                            
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-level-1 has-sub-navigation" onMouseOver={this.showSubNavigation} 
                            onMouseOut={this.hideSubNavigation} >
                            <a className="accordion-button-required">
                                Products
                            </a>
                            <ul className="sub-navigation">
                                <li>
                                    <a>
                                        level2 - 1
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    level2 - 2                                            
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    level2 - 3                                            
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <button ref="burgerMenu" className="header-menu-icon" onClick={this.toggleNavMobile}>
                    <span>
                    </span>
                    <span>
                    </span>
                    <span>
                    </span>
                </button>
            </div>
        )
    }
}

export default primaryNavigation;