import { CSSProperties } from "react"


function sideBarStyle(screenWidth: number, searchBoxMargin:string, notificationBoxMargin: string): CSSProperties {

    return {
        top: screenWidth < 768 ? "auto" : "0" ,
        left: screenWidth < 768 ? "auto" : "0" ,
        bottom: screenWidth < 768 ? "0" : "auto",

        width: 
            screenWidth < 768 
            ? "100vw" 
            : screenWidth < 1260 
            ? "79px"
            : searchBoxMargin === "-25rem" && notificationBoxMargin === "-25rem"
            ? "244px"
            : "79px"
        ,

        height: screenWidth < 768 ? "auto" : "100vh" ,
        flexDirection: screenWidth < 768 ? "row" as "row" : "column" as "column",
        borderRight: screenWidth < 768 ? "none" : "1px solid #ffffff4d",
        borderTop: screenWidth < 768 ? "1px solid #ffffff4d" : "none",
        paddingBottom: screenWidth < 768 ? "0" : "2rem",
    };

}


function linkTextNameStyle(screenWidth: number, searchBoxMargin:string, notificationBoxMargin: string): CSSProperties {

    return { 
        display: 
            screenWidth <= 1260
            ? "none"
            : searchBoxMargin === "-25rem" && notificationBoxMargin === "-25rem" 
            ? "block" 
            : "none"
        ,

        gap: screenWidth < 768 ? "0" : "16px",
        marginLeft: screenWidth < 768 ? "0" : "10px",
        marginRight: screenWidth < 768 ? "0" : "1rem",
        height: screenWidth < 768 ? "max-content" : "auto",
    };

}


function instaTextStyle(screenWidth: number, searchBoxMargin:string, notificationBoxMargin: string): CSSProperties {

    return { 
        display: screenWidth <= 1260
            ? "none"
            : searchBoxMargin === "-25rem" && notificationBoxMargin === "-25rem" 
            ? "block" 
            : "none"
    };

}


function instaLogoStyle(screenWidth: number, searchBoxMargin:string, notificationBoxMargin: string): CSSProperties {

    return {
        display: screenWidth <= 1260
            ? "block"
            : searchBoxMargin !== "-25rem" || notificationBoxMargin !== "-25rem" 
            ? "block" 
            : "none"
    };
}


function linksStyle(screenWidth: number): CSSProperties {
    return {
        flexDirection: screenWidth < 768 ? "row" : "column",
        justifyContent: screenWidth < 768 ? "space-evenly" : "",
        alignItems: screenWidth < 768 ? "center" : "",
        marginTop: screenWidth < 768 ? "0" : "10px",
    };
}

export { 
    sideBarStyle, linkTextNameStyle, instaTextStyle, instaLogoStyle,
    linksStyle
};