import { useEffect, useContext } from "react";
import { Users } from "../../data/Users";
import { SideBarContext } from "../../Context/Side_Bar";
import IonIcon from "@reacticons/ionicons";
import { handle_notification_box } from "../../handler/Links_Handler";





function Notification() {
    
    const{ screenWidth, searchBoxMarginAndState, notificationBoxMarginAndState } = useContext(SideBarContext);
    const{ notificationBoxMargin, setNotificationBoxMargin } = notificationBoxMarginAndState;
    const{ setSearchBoxMargin } = searchBoxMarginAndState;




    useEffect(() => {
        const notificationBox = document.querySelector(".Notification_Box") as HTMLElement;

        if(screenWidth < 768) {
            notificationBox.style.visibility = "hidden"
            setNotificationBoxMargin("-100%");
        } else {
            notificationBox.style.visibility = "visible"
            setNotificationBoxMargin("-25rem");
        }
    }, [screenWidth, setNotificationBoxMargin])

    return (
        <div 
            className="Notification_Box"
            style={{
                marginLeft: notificationBoxMargin
            }}
        >
        <section className="Notification_Content">
            <article className="Header_Notification">
                <p>Notifications</p>

                <IonIcon 
                    name="close"
                    style={{
                        display: screenWidth < 768 ? "block" : "none"
                    }}
                    onClick={() => handle_notification_box(screenWidth, setNotificationBoxMargin, setSearchBoxMargin)}
                ></IonIcon>
            </article>

            <article className="Follow_Requests">
                <div className="Follow_Requests_Users">
                    {
                        Users.map((user, i) => {
                            return (
                                <article 
                                    key={i} className="Follow_User"
                                    style={{
                                        justifyContent: screenWidth < 768 ? "space-between" : "normal"
                                    }}
                                >

                                    <div className="Follow_User_Names">
                                        <img 
                                            src={user.img} 
                                            alt="none"
                                            className="Follow_User_Image"
                                        /> 

                                        <div>
                                            <p>{user.name}</p>
                                            <p>{user.user_name}</p>
                                        </div>
                                    </div>

                                    <div className="Confirm_Delete_Request">
                                        <button>Confirm</button>
                                        <button>Delete</button>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>

            </article>
        </section>
        </div>
    )
}


export { Notification };