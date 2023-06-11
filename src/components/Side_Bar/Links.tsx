import { useState, useContext } from "react"
import { NavLink } from "react-router-dom";
import { Icons } from "../../data/icons";
import { Menu_Box } from "./Menu_Box";
import { SideBarContext } from "../../Context/Side_Bar";
import { MenuBoxStateType } from "../../Data_Types/Side_Bar_Components";
import { SideBar_Links } from "../../data/Side_Bar_Links";

import { sideBarStyle, linkTextNameStyle, instaTextStyle, instaLogoStyle, linksStyle } from "../../styles/JSX_Styles/Links_Styles";
import { 
    handle_search_box, handle_notification_box, handle_menu_box,
    handle_close_search_box, handle_close_notification_box, handle_close_menu_box
} from "../../handler/Links_Handler";




function Links() {
    
    const{ screenWidth, searchBoxMarginAndState, notificationBoxMarginAndState } = useContext(SideBarContext);
    const{ searchBoxMargin, setSearchBoxMargin } = searchBoxMarginAndState;
    const{ notificationBoxMargin, setNotificationBoxMargin } = notificationBoxMarginAndState;
    const[menuBoxStyle, setMenuBoxStyle] = useState<MenuBoxStateType>({
        visibility: "hidden",
        opacity: "0",
        bottom: "3rem"
    });

    


    return (
        <section 
            className="Side_Bar"
            style={sideBarStyle(screenWidth, searchBoxMargin, notificationBoxMargin)}
        >
            <article 
                className="Top_Sidebar"
                style={{
                    display: screenWidth < 768 ? "none" : "flex"
                }}
            >
                <NavLink to="/" className="Logo_Name_Link">
                    <p style={instaTextStyle(screenWidth, searchBoxMargin, notificationBoxMargin)}>Instagram</p>

                    {Icons("insta_logo", instaLogoStyle(screenWidth, searchBoxMargin, notificationBoxMargin)).insta_logo} 
                </NavLink>
            </article>

            <article 
                className="Links" 
                style={linksStyle(screenWidth)}
            >

                {
                    SideBar_Links.map((link, i) => {
                        if(link.text !== "Search" && link.text !== "Notification" && link.text !== "Menu") {
                            return (
                                <NavLink to="/" className={link.class} key={i}
                                    onClick={() => {
                                        handle_close_search_box(setSearchBoxMargin, screenWidth);
                                        handle_close_notification_box(setNotificationBoxMargin, screenWidth);
                                        handle_close_menu_box(setMenuBoxStyle);
                                    }}
                                >
                                    {
                                        link.text === "Profile" 
                                        ? link.img
                                        : link.icon 
                                    }
                                    <p style={linkTextNameStyle(screenWidth, searchBoxMargin, notificationBoxMargin)}>{link.text}</p>
                                </NavLink>
                            )
                        } 

                        if(link.text === "Search" || link.text === "Notification") {
                            return (
                                <div className={link.class} key={i}
                                    onClick={() => {
                                        if(link.text === "Search") 
                                            handle_search_box(screenWidth, searchBoxMargin, setSearchBoxMargin, setNotificationBoxMargin);
                                        else 
                                            handle_notification_box(screenWidth, notificationBoxMargin, setNotificationBoxMargin, setSearchBoxMargin);

                                        handle_close_menu_box(setMenuBoxStyle);
                                    }}
                                >
                                    {link.icon}
                                    <p style={linkTextNameStyle(screenWidth, searchBoxMargin, notificationBoxMargin)}>Search</p>
                                </div>
                            )
                        }

                        if(link.text === "Menu") {
                            return (
                                <div className="Menu_Link" key={i}>
                                    <Menu_Box 
                                        menuBoxStyle={menuBoxStyle}
                                        
                                    />

                                    <div  className={link.class} onClick={() => handle_menu_box(setMenuBoxStyle)}>
                                        {Icons("menu SideBarIcons").menu}
                                        <p style={linkTextNameStyle(screenWidth, searchBoxMargin, notificationBoxMargin)}>More</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </article>
        </section>
    )
}





export { Links };




