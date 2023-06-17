import{ 
    HandleSliderScrollType, PostContentAndStateType, PostContentType
} from "../Data_Types/Home_Components";


const handle_slider_scroll = (
    {event, setShowLeftBtn, setShowRightBtn}: HandleSliderScrollType
) => {
    const slider = event.target as HTMLElement;
    const newPosition = slider.scrollLeft;
    const maxScrollPosition = slider.scrollWidth - slider.clientWidth;
  

    if(newPosition <= 15) {
        setShowLeftBtn(false);
    } else {
        setShowLeftBtn(true);
    }

    if(newPosition > maxScrollPosition - 15) {
        setShowRightBtn(false);
    } else {
        setShowRightBtn(true);
    }
    
};


const handle_left_btn = (sliderRef: React.MutableRefObject<null>) => {
    const slider = sliderRef.current as unknown as HTMLElement;
    slider.scrollLeft -= 200;
};

  
const handle_right_btn = (sliderRef: React.MutableRefObject<null>) => {
    const slider = sliderRef.current as unknown as HTMLElement;
    slider.scrollLeft += 200; 
};
  

const handle_like_comment_icon = (
    postId: string, userCommentId: string,
    PostContentAndState: PostContentAndStateType,
    postComment: PostContentType | undefined
) => {

    const{ postContent, setPostContent } = PostContentAndState;

    const updatePost = postContent.map((post) => {
        if(post.id === postId) {    
            postComment!.comment.map((commentPost, i) => {
                if(commentPost.id === userCommentId) {
                    if(commentPost.like.liked === false){
                        commentPost.like.liked = true;
                        commentPost.like.num++;
                    } else {
                        commentPost.like.liked = false;
                        commentPost.like.num--;
                    }
                }
                return commentPost;
            })
        }
        return post;
    })

    setPostContent([...updatePost]);
}


const hanlde_left_img_btn_body = (
    currentImgIndex:number, 
    setCurrentImgIndex:React.Dispatch<React.SetStateAction<number>>
) => {
    if(currentImgIndex > 0) {
        setCurrentImgIndex(currentImgIndex - 1);
    }
}


const hanlde_right_img_btn_body = (
    user: PostContentType,
    currentImgIndex:number, 
    setCurrentImgIndex:React.Dispatch<React.SetStateAction<number>>
) => {
    if(currentImgIndex < user.imgs.length - 1) {
        setCurrentImgIndex(currentImgIndex + 1);
    }
}


const hanlde_left_img_btn_comment = (
    currentImgIndex:number, 
    setCurrentImgIndex:React.Dispatch<React.SetStateAction<number>>
) => {
    if(currentImgIndex > 0) {
        setCurrentImgIndex(currentImgIndex - 1);
    }
}


const hanlde_right_img_btn_comment = (
    postComment: PostContentType | undefined, 
    currentImgIndex:number, 
    setCurrentImgIndex:React.Dispatch<React.SetStateAction<number>>
) => {
    const imgs = postComment && postComment.imgs ? postComment.imgs : ""
    if(currentImgIndex < imgs.length - 1) {
        setCurrentImgIndex(currentImgIndex + 1);
    }
}


const handle_like_icon = (
    postId: string, 
    postContent: PostContentType[], 
    setPostContent: React.Dispatch<React.SetStateAction<PostContentType[]>>
): void => {
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
        return user;
    });        
    
    setPostContent([...postContent]);        
};


const handle_save_icon = (
    postId: string,
    postContent: PostContentType[], 
    setPostContent: React.Dispatch<React.SetStateAction<PostContentType[]>>
): void => {
    postContent.filter((user, i) => { 
        if(user.id === postId) {
            if(user.save === false) {
                user.save = true;
            } else {
                user.save = false;
            }

        }
        return user;
    });     

    setPostContent([...postContent]);
};


export {
    handle_slider_scroll, handle_left_btn, handle_right_btn, 
    handle_like_comment_icon, hanlde_left_img_btn_body, hanlde_right_img_btn_body,
    hanlde_left_img_btn_comment, hanlde_right_img_btn_comment,
    handle_like_icon, handle_save_icon
};