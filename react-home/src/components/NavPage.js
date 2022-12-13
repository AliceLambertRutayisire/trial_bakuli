import React from 'react'
//import { Routes, Route } from "react-router-dom";
import FoodLog from '../pages/Foodlog'
import HealthSpace from '../pages/HealthSpace'
import Home from '../pages/Home'
import Settings from '../pages/Settings'
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const NavPage = () => {
  createBrowserRouter
  (
    [
    {
      path: "/Home",
      element: <Home />
    },
    {
      path: "/FoodLog",
      element: <FoodLog/>
  
    },
    {
      path: "/HealthSpace",
      element: <HealthSpace/>
  
    },
    {
      path: "/Settings",
      element: <Settings/>
  
    },
    
  ]);
  
}

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={NavPage} />

//   </React.StrictMode>
// );
export default NavPage