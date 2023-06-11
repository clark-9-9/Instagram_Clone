import { PostContentType } from "../../Data_Types/Home_Components";
import IonIcon from '@reacticons/ionicons';


function Post_Header({ user }: { user: PostContentType }) {

    return (
        <section className="Post_Header">
            <article className="Post_User_Profile">
                <img src={user.profile} />
                <p>{user.name}</p>
                <p>-</p>
                <p>22h</p>
            </article>

            <IonIcon className="ellipsis_horizontal" name="ellipsis-horizontal"></IonIcon>
        </section>
    )
}


export{ Post_Header }