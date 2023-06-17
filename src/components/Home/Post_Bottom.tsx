import { Fragment, useContext, useEffect } from "react";
import { PostContentType } from "../../Data_Types/Home_Components";
import { PostContext } from "../../Context/Posts";



function PostBottom({ user }:{user: PostContentType}) {

    const{ PostContentAndState } = useContext(PostContext);
    const{ setPostContent } = PostContentAndState;


    useEffect(() => {
        setPostContent((prevPostContent) => [...prevPostContent]);
    }, [setPostContent]);
          

    return (
        <div className="Post_Bottom">
            <p id="likesNum">{user.like.num.toLocaleString()} Likes</p>
            
            <div className="Caption_Container">
                <p className="User_Name_Caption">{user.name}: </p> 

                {
                    user.caption.split('\n').map((line, i) => {
                        return ( 
                            <Fragment key={i}>
                                {line}<br/>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}
 



export { PostBottom };





/* 
<p>{user.name}: {user.caption.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p> 

{
    input.split('\n').map((line, i) => <Fragment key={i}>{line}<br/></Fragment>)
}

name={
    user.like.liked === true
    ? "heart"
    : "heart-outline"  
}

*/



/* 
    {
        user.name.length >= 120 || moreCaption === true
        ? user.captions
        : user.captions.substring(0, 120) + "..."
    }

{/* 
    <p onClick={() => setMoreCaption(!moreCaption ? true: false)}>
        {
            moreCaption ? "less" : "more"
        }

    </p> 
*/
