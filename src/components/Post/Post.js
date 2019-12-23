import React from 'react';

import './Post.css';

const post = ({title, text, author, clicked}) => (
    <article className="Post" onClick={() => clicked()}>
        <h1>{ title }</h1>
        <div className="Info">
            <p>{text.slice(0, 60) + '...'}</p>
            <div className="Author">{ author }</div>
        </div>
    </article>
);

export default post;
