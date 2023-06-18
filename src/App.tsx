import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/Side_Bar/Side_Bar";
import { Home } from "./components/Home/Home";
import { ContextProvider } from "./Context/Side_Bar";


function App() {


    //! do not use screenWidth here cause the component will render whenever the width of screen changes
    
    return (
        <ContextProvider>
            <Fragment>
                <SideBar />

                <section 
                    className="Pages_Section"
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </section>
            </Fragment>
        </ContextProvider>
    );
}





export default App;
