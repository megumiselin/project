import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ResponsiveDrawer from "./components/Main";




import { Button } from "@mui/material";
import { SignalCellular4BarSharp } from "@mui/icons-material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  exact path="/" element={<Login/>}/>
          <Route  exact path="/home" element={<ResponsiveDrawer/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;