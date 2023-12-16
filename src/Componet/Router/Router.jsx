import {
     createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../../Home/Home/Home";
import Colleges from "../../Pages/Colleges/Colleges";
import Admission from "../../Pages/Admission/Admission";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import CollegeDetails from "../../Pages/CollegeDetails/CollegeDetails";
import AdmissionProcess from "../../Pages/AdmissionProcess/AdmissionProcess";
import MyCollege from "../../Pages/MyCollege/MyCollege";
import Rating from "../../Pages/Rating/Rating";

const Router = createBrowserRouter([
     {
          path: '/',
          element: <Main />,
          errorElement: <ErrorPage />,
          children: [
               {
                    path: '/',
                    element: <Home />
               },
               {
                    path: '/colleges',
                    element: <Colleges />
               },
               {
                    path: '/admission',
                    element: <Admission />
               },
               {
                    path: `/myCollege`,
                    element: <MyCollege />
               },
               {
                    path: '/collegeDetails/:id',
                    element: <PrivetRoute><CollegeDetails /></PrivetRoute>,
                    loader: () => fetch(`https://college-booking-server-mu-eight.vercel.app/college`)
               },
               {
                    path: '/admissionProcess/:id',
                    element: <AdmissionProcess />,
                    loader: () => fetch(`https://college-booking-server-mu-eight.vercel.app/collegeName`)
               },
               {
                    path: '/rating',
                    element: <Rating />
               },
               {
                    path: 'login',
                    element: <Login />
               },
               {
                    path: '/register',
                    element: <Register />
               }
          ]
     }
])
export default Router;