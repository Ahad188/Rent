import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../Home/Home";
import Feature from "../Fetures/Feature";
import Price from "../Price/Price";
import About from "../About/About";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
     {
          path:'/',
          element:<Layout/>,
          children:[
               {
                    path:'/',
                    element:<Home/>
               },
               {
                    path:'/about',
                    element:<About/>
               },
               {
                    path:'/services',
                    element:<Feature/>
               },
               {
                    path:'/blog',
                    element:<Blog/>
               },
               {
                    path:'/pricing',
                    element:<Price/>
               }
          ]

     }
])
export default router