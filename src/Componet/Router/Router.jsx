import {
     createBrowserRouter,
   } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Home/Home/Home";
import Colleges from "../../Pages/Colleges/Colleges";
import Admission from "../../Pages/Admission/Admission";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const Router = createBrowserRouter([
     {
          path: '/',
          element: <Main />,
          children: [
               {
                    path: '/',
                    element: <Home/>
               },
               {
                    path: '/colleges',
                    element: <Colleges/>
               },
               {
                    path: '/admission', 
                    element: <Admission/>
               },
               {
                    path: 'login',
                    element: <Login/>
               },
               {
                    path: '/register',
                    element: <Register/>
               }
          ]
     }
])
export default Router;