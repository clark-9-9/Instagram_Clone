import IonIcon from '@reacticons/ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


interface Icon_Type {
    [key: string]: React.ReactElement;
}


function Icons(className: string, styles?: object, eventHandler?: () => void): Icon_Type {
    return {
        insta_logo: <FontAwesomeIcon icon={faInstagram} className={className} style={styles} />,
        home: <IonIcon name="home-outline" className={className} style={styles} />,
        search: <IonIcon name="search-outline" className={className} style={styles} />,
        explore: <IonIcon name="compass-outline" className={className} style={styles} />,
        reels: <IonIcon name="play-outline" className= {className} style={styles}/>,
        message: <IonIcon name="paper-plane-outline" className={className} style={styles} />,
        notification: <IonIcon name="heart-outline" className={className} style={styles} />,
        create: <IonIcon name="add-outline" className={className} style={styles} />,
        menu: <IonIcon name="menu-outline" className={className} style={styles} />,
        close: <IonIcon name="close-circle" className={className} style={styles} onClick={eventHandler}/>
    };

}


function MenuIC(className: string, styles?: object, eventHandler?: () => void): Icon_Type {
    return {
        settings: <IonIcon name="settings-outline" className={className} style={styles} />,
        activity: <IonIcon name="timer-outline" className={className} style={styles} />,
        saved: <IonIcon name="bookmark-outline" className={className} style={styles} />,
        appearance: <IonIcon name="moon-outline" className={className} style={styles} />,
        arrow: <IonIcon name="chevron-forward-outline" className={className} style={styles} />,
        logout: <IonIcon name="log-out-outline" className={className} style={styles} />,
    };
} 




export { Icons, MenuIC };