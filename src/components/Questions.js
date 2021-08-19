import React, {useState, useEffect, useRef}from 'react';
import killua from './images/original.jpg'
const Questions = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep})=>{

    let[selected, setSelected] = useState('');
    const[error, setError]=useState('');
    const radioWrapper = useRef();

    const changeHandler = (e)=>{
        setSelected(e.target.value);
    }

    const nextClickHandler=(e)=>{
        onAnswerUpdate(prevState => [...prevState,{q: data.question, a: selected}]);
        setSelected('');
        if(activeQuestion < numberOfQuestions -1){
            console.log(selected);
            onSetActiveQuestion(activeQuestion + 1);
        }else{
            onSetStep(3);
        }
    }
    return(
        <center>
        <div class ="question">
            <a class ="text-question">{activeQuestion}/10</a>
            <h2 class ="text-question">{data.question}</h2>
            <img class ="option-image" src = {killua}></img>
            <div class="grid2x2">
            {data.choices.map((choice, i) =>(
            <div class="box box" ref={radioWrapper}><div>
            <label key={i}> 
                <input type="button" class="option" name="answer" value={choice} onClick={changeHandler} />
            </label>
            </div></div>
            ))}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Next</button>
            </div>
        </div>
        </center>
    )
}

export default Questions;