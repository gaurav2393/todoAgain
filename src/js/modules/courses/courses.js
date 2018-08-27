import React from 'react';
import CourseContentNavigation from './courseContentNavigation';
import CourseContent from './courseContent';
import CoursePageNavigation from './coursePageNavigation';

class Courses extends React.PureComponent {
    render() {
        return(
            <div className="course-container">
                <CourseContentNavigation />
                <CourseContent />
                <CoursePageNavigation />
            </div>
        )
    }
}

export default Courses;