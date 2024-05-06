import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import Error from "../components/ErorrPage/Error";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AddServices from "../components/AddServices/AddServices";
import Checkout from "../components/Checkoout/Checkout";
import MyBookings from "../components/MyBookings/MyBookings";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
         {
            path:"/",
            element:<Home></Home>,
            loader :()=>fetch('http://localhost:5000/services')
         },
         {
           path:"/login",
           element:<Login></Login>
         },
         {
          path:"/signup",
          element:<Signup></Signup>
         },
         {
          path:"/services",
          element:<AddServices></AddServices>
         },
         {
          path:"/checkout/:id",
          element:<Checkout></Checkout>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
         },
         {
          path: "/booking",
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute> 
         }
      ]
    },
  ]);

export default router;