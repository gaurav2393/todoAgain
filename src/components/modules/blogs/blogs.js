import React from 'react';
import AuthorBasicInfo from './authorBasicInfo';
import LikeAndShare from './likeAndShare';
import BlogMainBody from './blogMainBody';

class Blogs extends React.PureComponent {
    render() {
        return(
            <div className='blog-container' >
                <div className="social-share">
                    <LikeAndShare />
                </div>
                <div className="blog-description">
                    <AuthorBasicInfo name='Gaurav Gera' imagePath='images/testImage.png' date='18 Jan' 
                        shortDesc='Description about the author' timeToRead='7 min' 
                    />
                    {/*Either the content data or else send the id number so that compnent can make the api hit for the data*/}
                    <BlogMainBody blogid="idNumber" />
                </div>
                
                
            </div>
        )
    }
}

export default Blogs;
