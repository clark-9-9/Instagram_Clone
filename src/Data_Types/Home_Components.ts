export interface HandleSliderScrollType {
    event: any;
    setShowLeftBtn: React.Dispatch<React.SetStateAction<boolean>>; 
    setShowRightBtn: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface IconsType {
    id: string;
    name: 
        ("heart-outline" | "heart") |
        ("chatbubbles-outline") |
        ("paper-plane-outline") |
        ("bookmark-outline" | "bookmark") 
    ;

    className: "Like" | "Comment" | "Send" | "Save";
}


export interface ReplyComments {
    userName: string;
    userImg: string;
    text: string;
}
 

export interface Comments {
    id: string;
    userName: string;
    userImg: string;
    text: string;
    like: {
        liked: boolean;    
        num:number;
    }
    reply: ReplyComments[] | [];
}


export interface PostContentType {
    id: string;
    profile: string;
    name: string;
    userName: string;
    imgs: string[];
    imgSize: "4/5" | "16/9" | "1/1";
    icons: IconsType[];
    like: {
        liked: boolean;
        num : number;
    };
    save: boolean;
    comment: Comments[];
    caption: string;
}




export interface PostContentAndStateType {
    postContent: PostContentType[], 
    setPostContent: React.Dispatch<React.SetStateAction<PostContentType[]>>
} 



export interface PostContextProviderPropsType {
    children: React.ReactNode;
}


export interface PostValuesType {
    PostContentAndState: {
        postContent: PostContentType[],
        setPostContent:  React.Dispatch<React.SetStateAction<PostContentType[]>>
    },

    PostCommentAndState: {
        postComment: PostContentType | undefined, 
        setPostComment: React.Dispatch<React.SetStateAction<PostContentType | undefined>>
    },

    IsCommentBoxVisibleAndState: {
        isCommentBoxVisible: boolean, 
        setIsCommentBoxVisible: React.Dispatch<React.SetStateAction<boolean>>

    }

}
