import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Quiz(props) {
  
    const [result,setResult] = useState(0)
    const quiz = useLoaderData();
    const notify = () => toast.info(`Correct ans is  ${result}  out of ${quiz.data.questions.length} `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;
    const submit = ()=>{  
        window.scroll(0,50)
        const seletedOption = document.querySelectorAll('.seletedOption');
        const Question = document.querySelectorAll('.question');
        const correct_ans = document.querySelectorAll('.correct-ans');
        
        const submitedAns = [];
       
// get the inputed option of the quiz        
seletedOption.forEach((e)=>{   
    if(e.children[0].checked===true ) {
        submitedAns.push(e.children[0].value )
        e.parentNode.parentNode.parentNode.children[2].children[0].innerText = e.children[0].value  
       
    }  
}) 


// get the corret ans 
let count = 0 
Question.forEach((e)=>{
    const correctAnswer = e.children[3].children[0].innerText 
   
  if(  submitedAns.includes(correctAnswer) ) {
    count = count+1
  }
  
})
correct_ans.forEach((e)=>{
    const correct = e.children[0].innerText
    const user = e.parentNode.children[2].children[0].innerText
   
    if ( correct === user ){
        e.parentNode.children[2].classList.remove('bg-danger')
    }
    e.classList.remove('d-none')
    e.parentNode.children[2].classList.remove('d-none')

    
} )

setResult(count) ; count=0
notify()



    }

    return (<div >
        <h1 className=' text-center mt-4'>{quiz.data.name} Test</h1>
{ quiz.data?<>{quiz.data.questions.map((item,i )=> <div key={item.id}> 
    
    <div className='row mx-5 my-5'>
            <div className=' col-12 question'>
                <h5 className=' d-flex ' >{i+1}. <span className=' ps-2' dangerouslySetInnerHTML={{__html: item.question}}></span></h5>
                <ul className='row options ' >
                        { item.options.map((option,i)=>
                                                    <li className='col-6 p-2' key={i}>        
                                                        <div className="form-check cursor-pointer seletedOption">
                                                            <input className="form-check-input cursor-pointer" type="radio" name={item.id} id={option} value={option} />
                                                            <label className="form-check-label cursor-pointer" htmlFor={option}>{option}</label>
                                                            
                                                        </div>
                                                    </li>
                        )
                        
                        }
                        
                   
                    
                </ul>
                <p className='user-ans py-2  ps-4  fw-bold rounded-3 text-white bg-success d-none bg-danger '> Your Ans : <span> </span> </p>
                <p className='correct-ans py-2  ps-4 bg-success text-white fw-bold d-none rounded-3'>Correct : <span>{item.correctAnswer}</span></p>
            </div>
        </div>
    
    
</div> ) }</>:"" }  
    <div className=' ms-auto flex justify-content-end '> 
            <button className='btn btn-info px-5 py-2 text-white fw-bold my-5  ms-5 ' onClick={submit} >  Submit  </button> 
    </div> 
    <ToastContainer /> 
</div>
    );
}

export default Quiz;