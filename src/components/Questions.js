import React, {useState, useEffect, useRef}from 'react';
import killua from './images/original.jpg'
const Questions = ({data, onAsnwerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep})=>{

    const[selected, setSelected] = useState('');
    const[error, setError]=useState('');
    const radioWrapper = useRef();
    const changeHandler = (e)=>{
        setSelected(e.target.value);
    }
    const nextClickHandler=(e)=>{

    }
    return(
        <center>
        <div class ="question">
            <h2 class ="text-question">{data.question}</h2>
            <img class ="option-image" src = {killua}></img>
            <div class="grid2x2">
            {data.choices.map((choice, i) =>(
            <div class="box box"i><div>
                <button class ="option" name="answer" value="{choice}">{choice}</button>
            </div></div>
            ))}
            </div>
        </div>
        </center>
)
}

export default Questions;