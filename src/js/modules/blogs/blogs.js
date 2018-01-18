import React from 'react';
import AuthorBasicInfo from '../../components/authorBasicInfo';

class Blogs extends React.PureComponent {
    render() {
        return(
            <div className='container' >
                <AuthorBasicInfo name='Gaurav Gera' imagePath='images/testImage.png' date='18 Jan' 
                    shortDesc='Description about the author' timeToRead='7 min' 
                />
            </div>
        )
    }
}

export default Blogs;
