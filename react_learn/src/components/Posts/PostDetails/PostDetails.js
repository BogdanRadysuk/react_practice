import React from 'react';

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <>
            <hr/>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
        </>
    );
};

export default PostDetails;