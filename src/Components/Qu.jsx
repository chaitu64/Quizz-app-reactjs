import React, { useRef, useState } from 'react'
import './Qu.css'
import { quizData } from '../assets/data'


const Qu = () => {

    let [index,setIndex] = useState(0);
    let [question,setQuestion] = useState(quizData[index]);
    let [lock,setLock] = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let option1 = useRef("null");
    let option2 = useRef("null");
    let option3 = useRef("null");
    let option4 = useRef("null");

    let option_array = [option1,option2,option3,option4];

    const checkAns = (e,ans) => {
        if (lock === false) {
            if (question.ans===ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            }
        }
    }

    const next = () => {

        if (lock === true) {
            if (index === quizData.length -1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(quizData[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(quizData[0]);
        setScore(0);
        setResult(false);
        setLock(false);
    }

  return (
    <div className='qu-box'>
        <h1>Fun Quizz</h1>
        <hr />
        {result? <></>: <>
        <h2>{index + 1}. {question.question}</h2>
        <ul>
            <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
            <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
            <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick = {next} >Next</button>
        <div className='index'>{index + 1} of {quizData.length} questions</div>

        </> 
        }
        { result? <>
            <h2>You Scored {score} out of {quizData.length}</h2>
            <button onClick={reset}>Reset</button>
        </> : <></>
        }
        
    </div>
  )
}

export default Qu