import{ useContext } from "react";
import IonIcon from "@reacticons/ionicons";
import { NavLink } from "react-router-dom";
import { SideBarContext } from "../../Context/Side_Bar";
import { handle_notification_box } from "../../handler/Links_Handler";




function Header() {
    
    const{ screenWidth, searchBoxMarginAndState, notificationBoxMarginAndState } = useContext(SideBarContext);
    const{ notificationBoxMargin, setNotificationBoxMargin } = notificationBoxMarginAndState;
    const{ setSearchBoxMargin } = searchBoxMarginAndState;

    return (
        <section className="Header_Section">
            <article >
                <p>Instagram</p>
            </article>
            
            <article>
                <NavLink to="*" >
                    <IonIcon name="compass-outline" />
                </NavLink>

                <div 
                    onClick={() => handle_notification_box(screenWidth, notificationBoxMargin, setNotificationBoxMargin, setSearchBoxMargin)}
                >
                    <IonIcon name="heart-outline" />
                </div>

                <NavLink to="*" >
                    <IonIcon name="paper-plane-outline" />
                </NavLink>
            </article>
        </section>
    )
}

export { Header };