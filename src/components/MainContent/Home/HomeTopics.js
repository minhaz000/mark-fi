import React from 'react';

function HomeTopics(props) {
    const quizzes = props.quizzes.data
    console.log( quizzes)
    return (
        <div className=' row my-5 px-2'>
            <h2 className=' text-center mb-5 text-capitalize'> select your language</h2>
 {quizzes?<> { quizzes.map( (item)=>{return( 
  <div className='col-sm-12 col-md-6 col-lg-3 p-2' key={item.id}> 
    <div className="card align-items-center py-3"  >
        <img src={item.logo} className="card-img-top topic rounded" alt={item.name} style={{width:"150px" }}/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Total:{item.total}</p>
            <button href="#" className="btn btn-primary w-100 px-5">Start Practicing</button>
        </div>
    </div>
 </div>

 ) }
 
 ) }</> : null}

    

</div>
    );
}

export default HomeTopics;