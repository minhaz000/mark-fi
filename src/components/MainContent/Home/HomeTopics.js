import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {rootContext} from '../../../Context'
function HomeTopics(props) {
    const quizzes = props.quizzes.data
    const {topics,setTopics} = useContext(rootContext)
    // console.log(topics)
    return (
        <div className=' row my-5 px-2'>
            <h2 className=' text-center mb-5 text-capitalize'> select your language</h2>
 {quizzes?<> { quizzes.map( (item)=>{return( 
  <div className='col-sm-12 col-md-6 col-lg-6 px-5' key={item.id}> 
    <div className="row  topic-card  my-2 p-3"  >
        
        <div className='col-4 text-center'> <img src={item.logo} className="card-img-top topic img-fluid rounded" alt={item.name} style={{width:"150px" }}/> </div>
        <div className="col-8">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Total:{item.total}</p>
            <Link className="btn btn-primary w-100 mt-5 px-5"  to={`quiz/${item.id}`} onClick={()=>{window.scroll(0, 0)}}>Start Practicing</Link>
        </div>
    </div>
 </div>

 ) }
 
 ) }</> : null}

    

</div>
    );
}

export default HomeTopics;