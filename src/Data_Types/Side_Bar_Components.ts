export interface MenuBoxStateType {
    visibility: 'visible' | "hidden";
    opacity: string;
    bottom: string;    
}

export interface MenuBoxProps {
    menuBoxStyle: {
        visibility: 'visible' | "hidden";
        opacity: string;
        bottom: string;    
    };
}


export interface MenuBoxType {
    visibility: 'visible' | "hidden";
    opacity: string;
    bottom: string;    
}


export interface Searched_Users_Props {
    inputSearch: string;
}


export interface MenuBoxLinksType {
    text: string;
    icon: React.ReactElement;
    to: "*";
    class: string;
}


export type SideBarValuesType = {
    screenWidth: number,
    searchBoxMarginAndState: {
        searchBoxMargin: string;
        setSearchBoxMargin: React.Dispatch<React.SetStateAction<string>>;
    },
    notificationBoxMarginAndState: {
        notificationBoxMargin: string;
        setNotificationBoxMargin: React.Dispatch<React.SetStateAction<string>>;
    }
};

export interface ContextProviderPropsType {
    children: React.ReactNode;
}
