import React, {useState, useEffect, useRef}from 'react';
import killua from './images/1.jpg'
const Questions = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, finalStep})=>{

    let[selected, setSelected] = useState('');
    const radioWrapper = useRef();
    const changeHandler = (e)=>{
        setSelected(e.target.value);
    }

    const nextClickHandler=(e)=>{
        onAnswerUpdate(prevState => [...prevState,{q: data.question, a: selected}]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1){
            console.log(selected);
            onSetActiveQuestion(activeQuestion + 1);
        }else{
            onSetStep(finalStep);    
        }
    }
    let image = require(`./images/${data.image}`).default;
    return(
        <div class ="home">
            <center>
            <h1 class ="text-question">{activeQuestion+1}/{numberOfQuestions}</h1>
            <h2 class ="text-question">{data.question}</h2>
            <img class ="option-image" src = {image}></img>
            <div class="grid2x2">
            {data.choices.map((choice, i) =>(
            <div class="box box" ref={radioWrapper}><div>
            <label key={i}> 
                <input type="button" class="option" name="answer" value={choice} onClick={changeHandler} />
            </label>
            </div></div>
            ))}
            </div>
            <button className="option-next" onClick={nextClickHandler}>Próxima</button>
            </center>
        </div>
    )
}

export default Questions;