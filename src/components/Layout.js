import React from 'react';
import {createBrowserRouter,RouterProvider,Outlet,} from "react-router-dom";
import Header from './Header/Header';
import Footer  from './Footer/Footer';
import MainContent  from './MainContent/MainContent';
import Quiz from './MainContent/Quiz/Quiz';
import Blog from './MainContent/Blog/Blog';
import Error from './404';
function Layout(props) {

    const router = createBrowserRouter([
        {
          path: "",
          element: <><Header/> <Outlet/> <Footer/></> ,
          errorElement : <Error></Error>,
          children : [ 
                    {
                        path:'/',
                        element:  <MainContent> </MainContent> ,
                        loader :async ()=> fetch('https://openapi.programming-hero.com/api/quiz')
                    },
                    {
                        path: "/quiz/:id",
                        element:  <Quiz> </Quiz> ,
                        loader : async ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                    }, 
                    {
                        path: "/blog",
                        element:  <Blog> </Blog> ,
                    }]
                    
        },
        
        
         
      ]);
    return (
        <div>
           
            <RouterProvider router={router} />
        </div>
    );
}

export default Layout;