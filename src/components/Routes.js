import React from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () =>
    {
        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/Home" element={<Home/>}></Route>
                </Routes>
            </Router>
            


    )
}
export default AppRoutes;