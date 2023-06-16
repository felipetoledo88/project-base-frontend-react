import React from "react";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import { NewRegister } from "./pages/NewRegister";



const Routes = () => {
   return(
     <div className="app">
       <Routes>
         <Route component = { Login }  path="/login"/>
         <Route component = { NewRegister }  path="/new-register" />
       </Routes>
       </div>
   )
}

export default Routes;