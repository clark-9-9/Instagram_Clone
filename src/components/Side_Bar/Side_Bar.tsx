import { useState } from "react";
import { Search } from "./Search";
import { Notification } from "./Notification";
import { Links } from "./Links";


function Side_Bar() {

    return (
        <div className="Side_Bar_Parent">
            <Links />
            
            <Search />

            <Notification />
        </div>
    )
}




export { Side_Bar };




