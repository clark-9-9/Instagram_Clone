import { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { MenuIC } from "../../data/icons";
import { MenuBoxProps } from "../../Data_Types/Side_Bar_Components";
import { menuBoxLinks } from "../../data/Menu_Box_Links";


function Menu_Box({ menuBoxStyle }: MenuBoxProps) {

    
    return (
        <section className="Menu_Box" style={menuBoxStyle}>
            {
                menuBoxLinks.map((link, i) => {
                    return (
                        <Fragment key={i}>
                            <NavLink to={link.to} className={link.class} key={i}>
                                <div>
                                    {link.icon}
                                    <p>{link.text}</p>
                                </div>


                                {MenuIC("more_arrow_ic").arrow}
                            </NavLink> 

                            {
                                link.text === "Switch appearance" ? <hr className="Menu_Hr" /> : ""
                            }
                        </Fragment>

                    )
                })
            }
        </section>
    )
}



export { Menu_Box };

