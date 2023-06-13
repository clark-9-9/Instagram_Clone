import { useState, createContext } from 'react';
import { PostContentType, PostContextProviderPropsType, PostValuesType } from "../Data_Types/Home_Components";
import { Posts_Content } from '../data/Posts';




const Post: PostValuesType = {
    PostContentAndState: {
        postContent: Posts_Content,
        setPostContent:  () => []
    },

    PostCommentAndState: {
        postComment: undefined, 
        setPostComment: () => []
    },

    IsCommentBoxVisibleAndState: {
        isCommentBoxVisible: false, 
        setIsCommentBoxVisible: () => false
    }


}


export const PostContext = createContext<PostValuesType>(Post);


const PostContextProvider: React.FC<PostContextProviderPropsType> = ({ children }) => {
    const[postContent, setPostContent] = useState<PostContentType[]>(Posts_Content);    
    const[postComment, setPostComment] = useState<PostContentType | undefined>(undefined);
    const[isCommentBoxVisible, setIsCommentBoxVisible] = useState<boolean>(false);

    
    return (
        <PostContext.Provider value={{
            PostContentAndState:{postContent, setPostContent},
            PostCommentAndState:{postComment, setPostComment},
            IsCommentBoxVisibleAndState:{isCommentBoxVisible, setIsCommentBoxVisible},
        }}>
            {children}
        </PostContext.Provider>
    );
}




export { PostContextProvider };