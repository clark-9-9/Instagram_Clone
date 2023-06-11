import { MenuIC } from "../data/icons";
import { MenuBoxLinksType } from "../Data_Types/Side_Bar_Components";

const menuBoxLinks: MenuBoxLinksType[] = [
    {
        text: "Settings",
        icon: MenuIC("settings MenuIC").settings,
        to: "*",
        class:"Menu_Box_Link"
    },
    {
        text: "Your Activity",
        icon: MenuIC("activity MenuIC").activity,
        to: "*",
        class:"Menu_Box_Link"
    },
    {
        text: "Saved",
        icon: MenuIC("saved MenuIC").saved,
        to: "*",
        class:"Menu_Box_Link"
    },
    {
        text: "Switch appearance",
        icon: MenuIC("appearance MenuIC").appearance,
        to: "*",
        class:"Menu_Box_Link"
    },
    {
        text: "Log Out",
        icon: MenuIC("logout MenuIC").logout,
        to: "*",
        class:"Menu_Box_Link"
    },
]


export { menuBoxLinks };