import { useState, useEffect, useRef, useContext } from 'react';
import profile from "../../Images/post5.jpg";
import { Users } from '../../data/Users';
import IonIcon from '@reacticons/ionicons';
import { SideBarContext } from '../../Context/Side_Bar';

import { 
    handle_slider_scroll, handle_left_btn, handle_right_btn 
} from "../../handler/Home_Handlers";



function Stories() {

    const sliderRef = useRef(null);
    const{ screenWidth } = useContext(SideBarContext);
    const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
    const [showRightBtn, setShowRightBtn] = useState<boolean>(false);



    useEffect(() => {
        if (sliderRef.current) {
            handle_slider_scroll({ 
                event: { target: sliderRef.current }, 
                setShowLeftBtn, 
                setShowRightBtn 
            })
        }
    }, []);
 
    useEffect(() => {
            handle_slider_scroll({ 
                event: { target: sliderRef.current }, 
                setShowLeftBtn, 
                setShowRightBtn 
            })
    }, [screenWidth]);

    

    return (
        <section 
            className='Stories_Slider_Parent' 
            style={{
                marginTop: screenWidth < 768 ? "70px" : "40px"
            }}
        >
            <button 
                onClick={() => handle_left_btn(sliderRef)}
                style={{ display: !showLeftBtn ? "none" : "block" }}
            >
                <IonIcon name="return-up-back-outline" />
            </button>
            
            <button 
                onClick={() => handle_right_btn(sliderRef)}
                style={{ display: !showRightBtn ? "none" : "block" }}
            >
                <IonIcon name="return-up-forward-outline" />
            </button>

            <article 
                className='Stories_Slider' 
                ref={sliderRef}
                onScroll={(e) => handle_slider_scroll({ event: e, setShowLeftBtn, setShowRightBtn })}

            >                
                {
                    Users.map((user, i) => {
                        return (
                            <div className='Strory' key={i}>
                                <img src={profile} alt='none'/>
                                <p>
                                    {
                                        user.name.length <= 10 
                                        ? user.name 
                                        : user.name.substring(0,10) + "..."
                                    }
                                </p>
                            </div>

                        )
                    })
                }
            </article>
        </section>    
    )
}



export { Stories };