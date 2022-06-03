import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import App from "./components/App";
import Sign from "./components/sign";

 function RouterPage(){
    return(
        
            <Router>
                <Routes>
               
                <Route exact path="/"  element={<App/>}></Route>
                    <Route path="/sign" element={<Sign/>} />
                </Routes>
            </Router>
            
       
    );
};
export default RouterPage;