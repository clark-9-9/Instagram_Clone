import { Icons } from "./icons";
import profile from "../Images/post5.jpg";


const SideBar_Links = [
    {
        text: "Home",
        icon: Icons("home SideBarIcons").home,
        to: "/",
        class:"Link Home"
    },
    {
        text: "Search",
        icon: Icons("search SideBarIcons").search,
        to: "/*",
        class:"Link Search"
    },
    {
        text: "Explore",
        icon: Icons("explore SideBarIcons").explore,
        to: "/*",
        class:"Link Explore"
    },
    {
        text: "Reels",
        icon: Icons("reels SideBarIcons").reels,
        to: "/*",
        class:"Link Reels"
    },
    {
        text: "Message",
        icon: Icons("messages SideBarIcons").message,
        to: "/*",
        class:"Link Message" 
    },
    {
        text: "Notification",
        icon: Icons("notification SideBarIcons").notification,
        to: "/*",
        class:"Link Notification"
    },
    {
        text: "Create",
        icon: Icons("create SideBarIcons").create,
        to: "/*",
        class:"Link Create"
    },
    {
        text: "Profile",
        img: <img src={profile} alt="none" className="Profile_Image" />,
        to: "/*",
        class:"Link Profile"
    },
    {
        text: "Menu",
        icon: Icons("menu SideBarIcons").menu,
        to: "/*",
        class:"Link Menu"
    },
]




export { SideBar_Links };