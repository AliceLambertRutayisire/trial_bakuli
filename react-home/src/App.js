import React from "react";
import "./App.css";
import NavPage from "./components/NavPage";
import { BrowserRouter, Router } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";

function App() {
  return (
    // <React.Fragment>
    //    <BrowserRouter>
    //     <NavPage />
    //    </BrowserRouter>
    //  </React.Fragment>
    <>
    {/* <NavPage/> */}
      <BrowserRouter>
      
      <MainPage />
      </BrowserRouter>
       
    
   
    </>
  );
}

export default App;
