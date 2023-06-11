import { MenuBoxType } from "../Data_Types/Side_Bar_Components";



const handle_search_box = (
    screenWidth: number, 
    searchBoxMargin: string,
    setSearchBoxMargin: React.Dispatch<React.SetStateAction<string>>, 
    setNotificationBoxMargin: React.Dispatch<React.SetStateAction<string>>
) => {

    const searchBox = document.querySelector('.Search_Box') as HTMLElement;
    searchBox.style.setProperty('visibility', 'visible');

    if(screenWidth < 768) {
        setSearchBoxMargin(searchBoxMargin === "-100%" ? "0" : "-100%");
        setNotificationBoxMargin("-100%");
    } 

    if(screenWidth >= 768) {
        setSearchBoxMargin(searchBoxMargin === "-25rem" ? "79px" : "-25rem");
        setNotificationBoxMargin("-25rem");
    } 
    
}


const handle_notification_box = (
    screenWidth: number, 
    notificationBoxMargin: string,
    setNotificationBoxMargin: React.Dispatch<React.SetStateAction<string>>,
    setSearchBoxMargin: React.Dispatch<React.SetStateAction<string>>
) => {

    const notificationBox = document.querySelector('.Notification_Box') as HTMLElement;
    notificationBox.style.setProperty('visibility', 'visible');

    if(screenWidth < 768) {
        setNotificationBoxMargin(notificationBoxMargin === "-100%" ? "0" : "-100%");
        setSearchBoxMargin("-100%");
    }

    if(screenWidth >= 768 ) {
        setNotificationBoxMargin(notificationBoxMargin === "-25rem" ? "79px" : "-25rem");
        setSearchBoxMargin("-25rem");
    } 
}


const handle_menu_box = (
    setMenuBoxStyle: React.Dispatch<React.SetStateAction<MenuBoxType>>,
) => {
    setMenuBoxStyle((style) => {
        if(style.visibility === "hidden") {
            return {
                visibility: "visible",
                opacity: "1",
                bottom: "4rem"        
            };
        } else {
            return {
                visibility: "hidden",
                opacity: "0",
                bottom: "3rem"        
            };
        }
    });
}


const handle_close_search_box = (setSearchBoxMargin: React.Dispatch<React.SetStateAction<string>>, screenWidth: number) => {
    if(screenWidth < 768) setSearchBoxMargin("-100%");
    else setSearchBoxMargin("-25rem");
}

const handle_close_notification_box = (setNotificationBoxMargin: React.Dispatch<React.SetStateAction<string>>, screenWidth: number) => {
    if(screenWidth < 768) setNotificationBoxMargin("-100%");
    else setNotificationBoxMargin("-25rem");
}

const handle_close_menu_box = (setMenuBoxStyle: React.Dispatch<React.SetStateAction<MenuBoxType>>) => {
    setMenuBoxStyle({
        visibility: "hidden",
        opacity: "0",
        bottom: "3rem"        
    })
}


export {
    handle_search_box, handle_notification_box , handle_menu_box,
    handle_close_search_box, handle_close_notification_box, handle_close_menu_box
};