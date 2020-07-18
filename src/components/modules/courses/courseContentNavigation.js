import React from 'react';
import map from 'lodash/map';

class CourseContentNavigation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            topics: ['Topic 1', 'Topic 2', 'Topic 3','Topic 4', 'Topic 5'
            , 'Topic 6', 'Topic 7', 'Topic 8', 'Topic 9', 'Topic 10']
        };
        this.changeTopic = this.changeTopic.bind(this);
    }

    changeTopic() {
        if(this.refs.courseContentNav.className.indexOf('display-block')>-1) {
            this.refs.courseContentNav.classList.remove('display-block');
            this.refs.currentPage.classList.remove('course-content-heading-active');
        } else {
            this.refs.courseContentNav.classList += ' display-block';
            this.refs.currentPage.classList += ' course-content-heading-active';
        }
    }
    render() {
        return (
            <div className="course-content-navigation">
                <h3 onClick={this.changeTopic} className="mobile-only" ref="currentPage">Topic 1</h3>
                <ul className="course-content-menu" ref="courseContentNav">
                    {map(this.state.topics, (value, index) => {
                        return <li className={index === 0 ? 'active-topic': '' } 
                            key={value}>
                                <i className={index===0 ? 'visited-course-topic' : '' }>
                                    {index+1}
                                </i>
                                <a href="javascript: void(0)">
                                    {value}
                                </a>
                        </li>
                    })}
                    {/* <li onClick={changeTopic}>Topic 1</li>
                    <li onClick={changeTopic}>Topic 2</li>
                    <li onClick={changeTopic}>Topic 3</li>
                    <li onClick={changeTopic}>Topic 4</li>
                    <li onClick={changeTopic}>Topic 5</li>
                    <li onClick={changeTopic}>Topic 6</li>
                    <li onClick={changeTopic}>Topic 7</li>
                    <li onClick={changeTopic}>Topic 8</li>
                    <li onClick={changeTopic}>Topic 9</li>
                    <li onClick={changeTopic}>Topic 10</li> */}
                </ul>
            </div>
        )
    }
}

export default CourseContentNavigation;