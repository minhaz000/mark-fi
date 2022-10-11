import React from 'react';

function Error(props) {
    return (
        <div className=' text-center align-middle error '>
           <h1 className=' text-danger'> Error ( 404 ) </h1> 
           <p className=' '> Nothig found</p>
        </div>
    );
}

export default Error;