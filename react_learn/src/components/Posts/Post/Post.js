import React, {useState} from 'react';
import PostDetails from "../PostDetails/PostDetails";

const Post = ({post}) => {
    const {id, title} = post
    const [isShow, setIsShow] = useState(false)
    return (
        <>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>
                <button onClick={() => setIsShow(!isShow)}>{isShow?'Hide':'Show'}</button>
            </div>
            {
                isShow&&<PostDetails post={post}/>
            }
        </>
    );
};

export {Post};