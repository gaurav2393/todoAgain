import React from 'react';

export default function LikeAndShare() {
    return (
        <div class="like-share">
            <ul>
                <li>
                    <a class="like-blog" title="Like it">
                        <img src="images/svgs/like.svg" alt="Like Image" />
                    </a>
                </li>
                <li>
                    <a class="share-blog" title="Share the blog">
                        <i></i>
                    </a>
                </li>
                <li>
                    <a class="more-options-blog" title="More Options">
                        <i></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}