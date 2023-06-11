import { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import {
    PostCommentProps, LeftSideCommentsBoxProps, RightSideCommentBoxProps 
} from "../../Data_Types/Home_Components";




function Comments_Box({ postComment, isCommentBoxVisibleAndState, PostContentAndState }: PostCommentProps)  {

    const{ isCommentBoxVisible, setIsCommentBoxVisible } = isCommentBoxVisibleAndState;

    
    return (
        <section 
            style={{
                visibility: isCommentBoxVisible ? 'visible' : 'hidden',
                opacity: isCommentBoxVisible ? '1' : '0',
            }}
            className="Comments_Box_Container" 
        >
            
            <IonIcon 
                name="close-outline" 
                className="Close_Comment_Box"
                onClick={() => setIsCommentBoxVisible(false)}
            />
    
            <article className="Comments_Box">
                <LeftSideCommentsBox 
                    postComment={postComment}
                    isCommentBoxVisible={isCommentBoxVisible}
                />
                
                <RightSideCommentBox 
                    postComment={postComment}
                    PostContentAndState={PostContentAndState}
                />
            </article>
        </section>
    )
}





function LeftSideCommentsBox({ postComment, isCommentBoxVisible }: LeftSideCommentsBoxProps) {
    const[currentImgIndex, setCurrentImgIndex] = useState<number>(0);


    const hanlde_left_img_btn = () => {
        if(currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1);
        }
    }

    const hanlde_right_img_btn = () => {
        const imgs = postComment && postComment.imgs ? postComment.imgs : ""
        if(currentImgIndex < imgs.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        }
    }

    

    useEffect(() => {
        if(isCommentBoxVisible == false) {
            const timeoutId = setTimeout(() => {
                setCurrentImgIndex(0);
            }, 500)
            
            return () => clearTimeout(timeoutId);
        }        

    }, [isCommentBoxVisible]) 


    return (
        <section className="Left_Side_Comments_Box">
            <button 
                style={{ 
                    display: (postComment && postComment.imgs ? postComment.imgs.length : 0) <= 1 
                    ? "none" : "block" 
                }}  
                onClick={hanlde_left_img_btn}
            >
                <IonIcon name="chevron-back-outline" />
            </button>
            
            <button
                style={{ 
                    display: (postComment && postComment.imgs ? postComment.imgs.length : 0) <= 1 
                    ? "none" : "block" 
                }}  
                onClick={hanlde_right_img_btn}
            >
                <IonIcon name="chevron-forward-outline" />
            </button>

            {
                postComment && postComment.imgs &&
                postComment.imgs.map((img, imgIndex) => {
                    let position: string = "Prev_Slide";

                    if(currentImgIndex === imgIndex) {
                        position = "Active_Slide"
                    }

                    if(imgIndex === currentImgIndex + 1) {
                        position = "Next_Slide";
                    }

                    return (
                        <img 
                        key={imgIndex}
                            src={img}
                            className={position}
                        />
                    )
                })
            }
        </section>
    )
}




function RightSideCommentBox({ postComment, PostContentAndState }:RightSideCommentBoxProps) {

    // const[likeComment, setLikeComment] = useState<"heart" | "heart-outline">("heart-outline");
    const{ postContent, setPostContent } = PostContentAndState;


    const handle_like_comment_icon = (userCommentId: string) => {
        postContent.filter((user) => {
            if(user.id === postComment?.id) {    
                postComment.comment.map((com, i) => {
                    if(com.id === userCommentId) {
                        if(com.like.liked === false){
                            com.like.liked = true;
                            com.like.num++;
                        } else {
                            com.like.liked = false;
                            com.like.num--;
                        }
                    }
                })
            }
        })

        setPostContent([...postContent]);
    }



    return (
        <section className="Right_Side_Comments_Box">
            <header className="Top_Comment_Section">
                <div>
                    <img src={postComment?.profile} />
                    <p>{postComment?.name}</p>
                </div>

                <IonIcon name="ellipsis-horizontal" className="ellipsis_horizontal"/>
            </header>

            <article className="Center_Comment_Section">
                {
                    postComment?.comment.map((com, i) => {
                        return (
                            <ul className="User_Comment" key={com.id}>

                                <li className="User_Comment_Img">
                                    <img 
                                        src={com.userImg}  
                                        className="User_Comment_Img"
                                    />
                                </li>

                                <li className="Center_Single_Comment">
                                    <div className="Comment_Text">
                                        <p>{com.userName}: </p>

                                        <p>
                                            {com.text}
                                        </p>
                                    </div>

                                    <div className="Like_Reply_Comment">
                                        <p>{com.like.num} Likes</p>
                                        <p className="Reply_Text">Reply</p>
                                        <IonIcon 
                                            className="Like_Comment_Ic" 
                                            name={com.like.liked ? "heart" : "heart-outline"}
                                            onClick={() => handle_like_comment_icon(com.id)} 
                                        />
                                    </div>

                                    <div className="View_Replies">
                                        <p className="View_Text">View Replies(9)</p>
                                    </div>
                                </li>

                            </ul>
                        )
                    })
                }
            </article>

            <footer className="Bottom_Comment_Section">

            </footer>        
        </section>
    )
}


export { Comments_Box };

/* 
                <ul className="User_Comment">
                    <img 
                        src={postComment?.Comment[0].reply[0].userImg}  
                    />

                    <li className="Center_Single_Comment">
                        <div className="Comment_Text">
                            <p>Lara Croft: </p>

                            <p>
                                The dark side is a powerful force that can corrupt even the strongest of wills. It is a place of fear, anger, and hatred. Those who succumb to the dark side are lost to the light.
                            </p>
                        </div>

                        <div className="Like_Reply_Comment">
                            <p>454 Likes</p>
                            <p className="Reply_Text">Reply</p>
                            <IonIcon className="Like_Comment_Ic" name={likeComment} />
                        </div>

                        <div className="View_Replies">
                            <p className="View_Text">View Replies(9)</p>
                        </div>
                    </li>

                </ul>

*/