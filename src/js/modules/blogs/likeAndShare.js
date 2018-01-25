import React from 'react';

export default function LikeAndShare() {
    return (
        <div className="like-share">
            <ul>
                <li>
                    <a className="like-blog" title="Like it">
                        <img src="images/svgs/like.svg" alt="Like Image" />
                    </a>
                </li>
                <li>
                    <a className="share-blog" title="Share the blog">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a className="comment-on-blog" title="Have some question, Leave a comment">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a className="more-options-blog" title="More Options">
                        <i></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}