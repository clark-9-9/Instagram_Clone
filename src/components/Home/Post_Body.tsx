import { useState, useContext, useEffect } from "react";
import { PostContentType } from "../../Data_Types/Home_Components";
import IonIcon from '@reacticons/ionicons';
import { PostContext } from "../../Context/Posts";
import { 
    handle_like_icon, handle_save_icon, 
    hanlde_left_img_btn_body, hanlde_right_img_btn_body
 } from "../../handler/Home_Handlers";



function PostBody({ user }: {user: PostContentType}) {
    
    const{ PostContentAndState } = useContext(PostContext);

    const{ postContent, setPostContent } = PostContentAndState;
    const[currentImgIndex, setCurrentImgIndex] = useState<number>(0);

    
    useEffect(() => {
        setPostContent((prevPostContent) => [...prevPostContent]);
    }, [setPostContent]);
    
    return ( 
        <section className="Post_Body">
            <article className="Post_Img_Container" 
                style={{
                    aspectRatio: user.imgSize
                }}
            >
                
                <button 
                    style={{ display: user.imgs.length <= 1 ? "none" : "block" }}  
                    onClick={() => hanlde_left_img_btn_body(currentImgIndex, setCurrentImgIndex)}
                >
                    <IonIcon name="chevron-back-outline" />
                </button>
                
                <button
                    style={{ display: user.imgs.length <= 1 ? "none" : "block" }}  
                    onClick={() => hanlde_right_img_btn_body(user, currentImgIndex, setCurrentImgIndex)}
                >
                    <IonIcon name="chevron-forward-outline" />
                </button>
                
                {
                    user.imgs.map((img, imgIndex) => {
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
                                onDoubleClick={() => handle_like_icon(user.id, postContent, setPostContent)}
                                // className={imgIndex === currentImgIndex ? "Active_Slide" : imgIndex === currentImgIndex + 1 ? "Next_Slide" : "Prev_Slide"}
                            />
                        )
                    })
                }
            </article>

            <PostInterActionBox 
                user={user}
            />
        </section>
    )
}


function PostInterActionBox({ user }:{user: PostContentType}) {
    const{ PostCommentAndState, IsCommentBoxVisibleAndState, PostContentAndState } = useContext(PostContext);

    const{ setPostComment } = PostCommentAndState;
    const{ setIsCommentBoxVisible } = IsCommentBoxVisibleAndState;
    const{ postContent, setPostContent } = PostContentAndState;

     

    return (
        <article className="Post_Interactions_Box">
            {
                user.icons.map((icon, i) => {
                    return (
                        <IonIcon 
                            key={i}
                            className={`${icon.className} InteractionsIC`}
                            name={
                                (icon.name === "heart-outline" && user.like.liked) 
                                ? "heart" 
                                : (icon.name === "bookmark-outline" && user.save) 
                                ? "bookmark" 
                                : icon.name                      
                            } 
                            onClick={(e) => {
                                if(icon.name === "heart-outline" || icon.name === "heart") {
                                    handle_like_icon(user.id, postContent, setPostContent);
                                }

                                if(icon.name === "bookmark-outline" || icon.name === "bookmark") {
                                    handle_save_icon(user.id, postContent, setPostContent);
                                }

                                if(icon.name === "chatbubbles-outline") {
                                    setPostComment(user);
                                    setIsCommentBoxVisible((prop) => {
                                        if(prop === false) return true;
                                        else return false;
                                    })
                                }
                            }}
                        ></IonIcon>
                        
                    )
                })
            }
        </article>
    )
}



export { PostBody };







 



/* 

    const hanlde_left_img_btn = () => {
        if(0 < currentImgIndex) {
            setCurrentImgIndex(currentImgIndex - 1);
        } else {
            setCurrentImgIndex(user.imgs.length - 1);
        }
    }

    const hanlde_right_img_btn = () => {
        if((user.imgs.length - 1) > currentImgIndex) {
            setCurrentImgIndex(currentImgIndex + 1);
        } else {
            setCurrentImgIndex(0);
        }
    }


*/