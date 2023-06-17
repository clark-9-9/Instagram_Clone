import { useContext, useEffect } from "react";
import { PostContext } from "../../Context/Posts";
import { PostContentType } from "../../Data_Types/Home_Components";
import IonIcon from '@reacticons/ionicons';


function PostHeader({ user }: { user: PostContentType }) {
    
    const{ PostContentAndState } = useContext(PostContext);
    const{ setPostContent } = PostContentAndState;

    useEffect(() => {
        setPostContent((prevPostContent) => [...prevPostContent]);
    }, [setPostContent]);
     

    return (
        <section className="Post_Header">
            <article className="Post_User_Profile">
                <img src={user.profile} alt="none"/>
                <p>{user.name}</p>
                <p>-</p>
                <p>22h</p>
            </article>
            <IonIcon className="ellipsis_horizontal" name="ellipsis-horizontal"></IonIcon>
        </section>
    )
}


export{ PostHeader }