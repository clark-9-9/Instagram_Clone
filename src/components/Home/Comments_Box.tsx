import { useEffect, useState, useContext, useRef } from "react";
import IonIcon from "@reacticons/ionicons";
import { PostContext } from "../../Context/Posts";
import { 
    handle_like_comment_icon, hanlde_left_img_btn_comment, hanlde_right_img_btn_comment 
} from "../../handler/Home_Handlers";
// import userRepliedImg from "../../Images/Default_full_body_a_young_woman_with_a_mane_of_blonde_hair_her_2_146707eb-7564-4052-935b-e912f245ad47_1.jpg";
import { Comments } from "../../Data_Types/Home_Components";




function CommentsBox()  {

    const{ IsCommentBoxVisibleAndState } = useContext(PostContext);
    const{ isCommentBoxVisible, setIsCommentBoxVisible } = IsCommentBoxVisibleAndState;

    
    
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
                <LeftSideCommentsBox />
                
                <RightSideCommentBox />
            </article>
        </section>
    )
}





function LeftSideCommentsBox() {
    const[currentImgIndex, setCurrentImgIndex] = useState<number>(0);

    const{ PostCommentAndState, IsCommentBoxVisibleAndState } = useContext(PostContext);
    const{ postComment } = PostCommentAndState;
    const{ isCommentBoxVisible } = IsCommentBoxVisibleAndState;



    

    useEffect(() => {
        if(isCommentBoxVisible === false) {
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
                onClick={() => hanlde_left_img_btn_comment(currentImgIndex, setCurrentImgIndex)}
            >
                <IonIcon name="chevron-back-outline" />
            </button>
            
            <button
                style={{ 
                    display: (postComment && postComment.imgs ? postComment.imgs.length : 0) <= 1 
                    ? "none" : "block" 
                }}  
                onClick={() => hanlde_right_img_btn_comment(postComment, currentImgIndex, setCurrentImgIndex)}
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
                            alt="none"
                            className={position}
                        />
                    )
                })
            }
        </section>
    )
}




function RightSideCommentBox() {

    const{ PostCommentAndState } = useContext(PostContext);
    const{ postComment } = PostCommentAndState;

   

    return (
        <section className="Right_Side_Comments_Box">
            <header className="Top_Comment_Section">
                <div>
                    <img src={postComment?.profile} alt="none" />
                    <p>{postComment?.name}</p>
                </div>

                <IonIcon name="ellipsis-horizontal" className="ellipsis_horizontal"/>
            </header>

            <CenterCommentSection />

            <footer className="Bottom_Comment_Section">

            </footer>        
        </section>
    )
}

function CenterCommentSection() {
    const{ PostCommentAndState, PostContentAndState } = useContext(PostContext);
    const{ postComment } = PostCommentAndState;

    return (
        <article className="Center_Comment_Section">
            {
                postComment?.comment.map((commentPost, i) => {
                    return (
                        <ul className="User_Comment" key={commentPost.id}>
                            <li className="User_Comment_Img">
                                <img 
                                    src={commentPost.userImg}  
                                    alt="none"
                                    className="User_Comment_Img"
                                />
                            </li>

                            <li className="Center_Single_Comment">
                                <div className="Comment_Text">
                                    <p>{commentPost.userName}: </p>
                                    <p>{commentPost.text}</p>
                                </div>

                                <div className="Like_Reply_Comment">
                                    <p>{commentPost.like.num} Likes</p>
                                    <p className="Reply_Text">Reply</p>
                                    <IonIcon 
                                        className="Like_Comment_Ic" 
                                        name={commentPost.like.liked ? "heart" : "heart-outline"}
                                        onClick={
                                            () => handle_like_comment_icon(postComment.id, commentPost.id, PostContentAndState, postComment)
                                        } 
                                    />
                                </div>

                                <ViewReplies 
                                    commentPost={commentPost}
                                />
                            </li>

                        </ul>
                    )
                })
            }
        </article>
    )
}


function ViewReplies({ commentPost }: {commentPost: Comments}) {

    const viewReplyRef = useRef<HTMLUListElement | null>(null);
    const{ PostCommentAndState } = useContext(PostContext);
    const{ postComment } = PostCommentAndState;




    const hanlde_show_reply_comment = (postCommentId: string) => {
        postComment?.comment.map((comment) => {
            if(comment.id === postCommentId) {
                if(viewReplyRef && viewReplyRef.current) {
                    viewReplyRef.current.style.display === "none"
                    ? viewReplyRef.current.style.display = "flex"
                    : viewReplyRef.current.style.display = "none";
                }
            }
            return comment;
        })
    }



    return (
        <div 
            className="View_Replies"
        >
            <p 
                className="View_Text" 
                style={{ display: commentPost.reply.length === 0 ? "none" : "block"  }}
                onClick={() => hanlde_show_reply_comment(commentPost.id)}
            >
                View Replies({commentPost.reply.length})
            </p>

            <ul 
                ref={viewReplyRef}
                className="Reply_Texts"
                style={{
                    display: "none"
                }} 
            >
                {
                    commentPost.reply.map((reply, i) => {
                        return (
                            <div className="Reply_User_Container" key={i}>
                                <li>
                                    <img 
                                        src={reply.userImg}  
                                        alt="none"
                                        className="User_Reply_Comment_Img"
                                    />
                                </li>

                                <li>
                                    <p>{reply.userName}: </p>
                                    <p>{reply.text}</p>
                                </li>
                            </div>
                        )
                    }) 
                }
            </ul>
        </div>
    )
}



export { CommentsBox };



/* 

            <ul className="Reply_Texts">
                <li>
                    <img 
                        src={userRepliedImg}  
                        alt="none"
                        className="User_Reply_Comment_Img"
                    />
                </li>

                <li>
                    <p>{commentPost.userName}: </p>
                    <p>{commentPost.text}</p>
                </li>
            </ul>


*/