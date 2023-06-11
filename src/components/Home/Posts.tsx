import React, { useState,  MouseEvent, useEffect } from "react";
import { Posts_Content } from '../../data/Posts';
import type { PostContentType } from "../../data/Posts";
import { Post_Header } from "./Post_Header";
import { Post_Body } from "./Post_Body";
import { Post_Bottom } from "./Post_Bottom";
import { Comments_Box } from "./Comments_Box";





function Posts() {

    const[postContent, setPostContent] = useState<PostContentType[]>(Posts_Content);    
    const[postComment, setPostComment] = useState<PostContentType | undefined>(undefined);
    const[isCommentBoxVisible, setIsCommentBoxVisible] = useState<boolean>(false);


    

    return (
        <section className='Posts'>
            {
                postContent.map((user, i) => {
                    
                    return (
                        <article className="Post" key={i}>

                            <Post_Header 
                                user={user}
                            />

                            <Post_Body 
                                user={user}
                                PostContentAndState={{ postContent, setPostContent }}
                                setPostComment={setPostComment}
                                setIsCommentBoxVisible={setIsCommentBoxVisible}
                            />

                            <Post_Bottom 
                                user={user}
                            />
                        </article>
                    )
                })    
            }
            
            <Comments_Box 
                postComment={postComment}
                isCommentBoxVisibleAndState={{ isCommentBoxVisible , setIsCommentBoxVisible}}
                PostContentAndState={{ postContent, setPostContent }}
            />

        </section>
    )
}







export { Posts };





