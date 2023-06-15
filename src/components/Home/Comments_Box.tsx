import { useEffect, useState, useContext } from "react";
import IonIcon from "@reacticons/ionicons";
import { PostContext } from "../../Context/Posts";
import { 
    handle_like_comment_icon, hanlde_left_img_btn_comment, hanlde_right_img_btn_comment 
} from "../../handler/Home_Handlers";




function Comments_Box()  {

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

    const{ PostCommentAndState, PostContentAndState } = useContext(PostContext);
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

            <article className="Center_Comment_Section">
                {
                    postComment?.comment.map((com, i) => {
                        
                        return (
                            <ul className="User_Comment" key={com.id}>
                                <li className="User_Comment_Img">
                                    <img 
                                        src={com.userImg}  
                                        alt="none"
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
                                            onClick={
                                                () => handle_like_comment_icon(postComment.id, com.id, PostContentAndState, postComment)
                                            } 
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
