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



export {
    handle_slider_scroll, handle_left_btn, handle_right_btn, 
    handle_like_comment_icon
};