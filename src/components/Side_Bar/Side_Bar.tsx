import { Search } from "./Search";
import { Notification } from "./Notification";
import { Links } from "./Links";


function SideBar() {

    return (
        <div className="Side_Bar_Parent">
            <Links />
            
            <Search />

            <Notification />
        </div>
    )
}




export { SideBar };




