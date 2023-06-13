import { useState, useContext } from "react";
import { PostContentType } from "../../Data_Types/Home_Components";
import IonIcon from '@reacticons/ionicons';
import { PostContext } from "../../Context/Posts";



function Post_Body({ user }: {user: PostContentType}) {
    
    const{ PostCommentAndState, IsCommentBoxVisibleAndState, PostContentAndState } = useContext(PostContext);

    const{ postContent, setPostContent } = PostContentAndState;
    const{ setPostComment } = PostCommentAndState;
    const{ setIsCommentBoxVisible } = IsCommentBoxVisibleAndState;
    const[currentImgIndex, setCurrentImgIndex] = useState<number>(0);




    const handle_like_icon = (postId: string): void => {
        postContent.filter((user, i) => { 
            if(user.id === postId) {
                if(user.like.liked === false) {
                    user.like.liked = true;
                    user.like.num++; 
                } else {
                    user.like.liked = false;
                    user.like.num--; 
                }
            }

            setPostContent([...postContent]);
        });        
    };

    const handle_save_icon = (postId: string): void => {
        postContent.filter((user, i) => { 
            if(user.id === postId) {
                if(user.save === false) {
                    user.save = true;
                } else {
                    user.save = false;
                }

            }
        });     

        setPostContent([...postContent]);
    };




    const hanlde_left_img_btn = () => {
        if(currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1);
        }
    }

    const hanlde_right_img_btn = () => {
        if(currentImgIndex < user.imgs.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        }
    }

    

    
    return (
        <section className="Post_Body">
            <article className="Post_Img_Container" 
                style={{
                    aspectRatio: user.imgSize
                }}
            >
                
                <button 
                    style={{ display: user.imgs.length <= 1 ? "none" : "block" }}  
                    onClick={hanlde_left_img_btn}
                >
                    <IonIcon name="chevron-back-outline" />
                </button>
                
                <button
                    style={{ display: user.imgs.length <= 1 ? "none" : "block" }}  
                    onClick={hanlde_right_img_btn}
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
                                className={position}

                                // className={imgIndex === currentImgIndex ? "Active_Slide" : imgIndex === currentImgIndex + 1 ? "Next_Slide" : "Prev_Slide"}
                                onDoubleClick={() => handle_like_icon(user.id)}
                            />
                        )
                    })
                }
            </article>

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
                                        handle_like_icon(user.id);
                                    }

                                    if(icon.name === "bookmark-outline" || icon.name === "bookmark") {
                                        handle_save_icon(user.id);
                                    }

                                    if(icon.name === "chatbubbles-outline") {
                                        setPostComment(user);
                                        setIsCommentBoxVisible((prop) => {
                                            if(prop === false) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        })
                                    }
                                }}
                                
                            ></IonIcon>
                        )
                    })
                }
            </article>
        </section>
    )
}


export { Post_Body };











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