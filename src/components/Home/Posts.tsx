import { useContext } from "react";
import { PostHeader } from "./Post_Header";
import { PostBody } from "./Post_Body";
import { PostBottom } from "./Post_Bottom";
import { CommentsBox } from "./Comments_Box";
import { PostContext, PostContextProvider } from "../../Context/Posts";





function Posts() {

    const{ PostContentAndState } = useContext(PostContext);
    const{ postContent } = PostContentAndState;




    return (
        <PostContextProvider>
            <section className='Posts'>
                {
                    postContent.map((user, i) => {
                        return (
                            <article className="Post" key={i}>

                                <PostHeader 
                                    user={user}
                                />

                                <PostBody 
                                    user={user}
                                />

                                <PostBottom 
                                    user={user}
                                />
                            </article>
                        )
                    })    
                }
                
                <CommentsBox />

            </section>
        </PostContextProvider>
    )
}







export { Posts };





