import React, { useState, createContext, useEffect, useCallback } from "react";
import { SideBarValuesType, ContextProviderPropsType } from "../Data_Types/Side_Bar_Components";



const Sidebar: SideBarValuesType = {
    screenWidth: 0,
    searchBoxMarginAndState: {searchBoxMargin: "-25rem", setSearchBoxMargin: () => ''},
    notificationBoxMarginAndState: {notificationBoxMargin: "-25rem", setNotificationBoxMargin: () => ''}
};

const SideBarContext = createContext<SideBarValuesType>(Sidebar); 

const ContextProvider: React.FC<ContextProviderPropsType> = ({ children }) => {
    const[searchBoxMargin, setSearchBoxMargin] = useState<string>("-25rem");
    const[notificationBoxMargin, setNotificationBoxMargin] = useState<string>("-25rem");
    const[screenWidth, setScreenWidth] = useState<number>(window.innerWidth);


    useEffect(() => {
        const handle_screen = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handle_screen);
        return () => window.addEventListener("resize", handle_screen);
    }, [])

      
    return (
        <SideBarContext.Provider 
            value={{
                screenWidth:screenWidth,
                searchBoxMarginAndState: {searchBoxMargin, setSearchBoxMargin},
                notificationBoxMarginAndState: {notificationBoxMargin, setNotificationBoxMargin }
            }}
        > 
            {children} 
        </SideBarContext.Provider>
    )
}

export{ ContextProvider, SideBarContext };














    // const handleScreen = useCallback(() => {
    //     const newWidth = window.innerWidth;
    //     if (newWidth !== screenWidth) {
    //         setScreenWidth(newWidth);
    //     }
    // }, [screenWidth]);
      
    // useEffect(() => {
    //     window.addEventListener("resize", handleScreen);
    //     return () => {
    //         window.removeEventListener("resize", handleScreen);
    //     };
    // }, [handleScreen]);
