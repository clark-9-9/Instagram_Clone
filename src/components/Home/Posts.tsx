import { useContext } from "react";
import { Post_Header } from "./Post_Header";
import { Post_Body } from "./Post_Body";
import { Post_Bottom } from "./Post_Bottom";
import { Comments_Box } from "./Comments_Box";
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

                                <Post_Header 
                                    user={user}
                                />

                                <Post_Body 
                                    user={user}
                                />

                                <Post_Bottom 
                                    user={user}
                                />
                            </article>
                        )
                    })    
                }
                
                <Comments_Box />

            </section>
        </PostContextProvider>
    )
}







export { Posts };





