import{ HandleSliderScrollType } from "../Data_Types/Home_Components";



const handle_slider_scroll = (
    {event, setShowLeftBtn, setShowRightBtn}: HandleSliderScrollType
) => {
    const slider = event.target as HTMLElement;
    const newPosition = slider.scrollLeft;
    const maxScrollPosition = slider.scrollWidth - slider.clientWidth;
  

    if(newPosition <= 15) {
        setShowLeftBtn(false);
    } else {
        setShowLeftBtn(true);
    }

    if(newPosition > maxScrollPosition - 15) {
        setShowRightBtn(false);
    } else {
        setShowRightBtn(true);
    }
    
};


const handle_left_btn = (sliderRef: React.MutableRefObject<null>) => {
    const slider = sliderRef.current as unknown as HTMLElement;
    slider.scrollLeft -= 200;
};
  
const handle_right_btn = (sliderRef: React.MutableRefObject<null>) => {
    const slider = sliderRef.current as unknown as HTMLElement;
    slider.scrollLeft += 200; 
};
  


export {
    handle_slider_scroll, handle_left_btn, handle_right_btn
};