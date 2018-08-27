import React from 'react';
import CourseContentNavigation from './courseContentNavigation';
import CourseContent from './courseContent';
import CoursePageNavigation from './coursePageNavigation';

class Courses extends React.PureComponent {
    render() {
        console.log('course props', this.props);
        return(
            <div class="course-container">
                <CourseContentNavigation />
                <CourseContent />
                <CoursePageNavigation />
            </div>
        )
    }
}

export default Courses;