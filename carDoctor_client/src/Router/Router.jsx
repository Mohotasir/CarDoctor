import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import Error from "../components/ErorrPage/Error";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AddServices from "../components/AddServices/AddServices";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
         {
            path:"/",
            element:<Home></Home>
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
         }
      ]
    },
  ]);

export default router;