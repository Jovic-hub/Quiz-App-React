import React, {useState, useEffect, useRef}from 'react';
import './index-s.scss';
import error_image from './images/error.gif'

const Questions = ({data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, finalStep})=>{

    let[selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radioWrapper = useRef();
    const changeHandler = (e)=>{
        setSelected(e.target.value);
        if(error) {
            setError('');
        }
    }

    const nextClickHandler=(e)=>{
        if(selected === '') {
            return setError('Selecione uma opção!');
        }
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
            <div class="buttons">
            {data.choices.map((choice, i) =>(
            <div class ="button-wrapper">
                <button className="button" name="answer" value={choice} onClick={changeHandler}>{choice}</button>
            </div>
            ))}
            </div>


            {error && <div><img class ="error-image" src = {error_image}></img></div>}
            {error && <div className="error">{error}</div>}
                <button className="next" onClick={nextClickHandler}>Próxima</button>
            </center>
        </div>
    )
}

export default Questions;