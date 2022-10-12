import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Quiz(props) {
    const quiz = useLoaderData();
    const submit = ()=>{
        const seletedAns = document.querySelectorAll('.options');
        console.log( seletedAns[0].children[0].children[0].children[0])
        seletedAns.forEach(
            console.log(seletedAns.children)
         )

console.log( " clicked ")
    }

    return (<div >
        <h1 className=' text-center mt-4'>{quiz.data.name} Test</h1>
{ quiz.data?<>{quiz.data.questions.map((item,i )=> <div key={item.id}> 
    
    <div className='row mx-5 my-5'>
            <div className=' col-12 '>
                <h5 className=' d-flex' >{i+1}. <span className=' ps-2' dangerouslySetInnerHTML={{__html: item.question}}></span></h5>
                <ul className='row options' >
                        { item.options.map((option,i)=>
                                                    <li className='col-6 p-2' key={i}>        
                                                        <div className="form-check cursor-pointer">
                                                            <input className="form-check-input cursor-pointer" type="radio" name={item.id} id={option} value={option} />
                                                            <label className="form-check-label cursor-pointer" htmlFor={option}>{option}</label>
                                                        </div>
                                                    </li>
                        )
                        
                        }
                        

                    
                </ul>
            </div>
        </div>
    
    
</div> ) }</>:"" }    
       <button onClick={submit} >  Submit  </button>
</div>
    );
}

export default Quiz;