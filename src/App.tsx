import React, { Fragment, useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Side_Bar } from "./components/Side_Bar/Side_Bar";
import { Home } from "./components/Home/Home";
import { SideBarContext, ContextProvider } from "./Context/Side_Bar";


function App() {


    //! do not use screenWidth here cause the component will render whenever the width of screen changes
    
    return (
        <ContextProvider>
            <Fragment>
                <Side_Bar />

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
