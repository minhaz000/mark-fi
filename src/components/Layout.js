import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet,} from "react-router-dom";
import Header from './Header/Header';
import Footer  from './Footer/Footer';
import MainContent  from './MainContent/MainContent';
import Quiz from './MainContent/Quiz/Quiz';
import Blog from './MainContent/Blog/Blog';
function Layout(props) {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <><Header/> <Outlet/> <Footer/></> ,
          children : [ 
            {
                path: "/",
                element:  <MainContent> </MainContent> ,
            },{
                path: "/quiz",
                element:  <Quiz> </Quiz> ,
            }, 
            {
                path: "/blog",
                element:  <Blog> </Blog> ,
            },

          ]
        },
        
         
      ]);
    return (
        <div>
           
            <RouterProvider router={router} />
        </div>
    );
}

export default Layout;