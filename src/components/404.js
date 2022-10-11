import React from 'react';
import { Link } from 'react-router-dom';
function Error(props) {
    return (
        <div className=' text-center align-middle error '>
           <h1 className=' text-danger  '> Error  ( 404 ) !!!</h1> 
           <p className=' text-capitalize '> nothing found in this url. error status (404) </p>
           <Link to={"/"}> Return to Home </Link>
          
        </div>
    );
}

export default Error;