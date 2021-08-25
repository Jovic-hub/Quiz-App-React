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
    const [counter, setCounter] = React.useState(600);    
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    
    let image = require(`./images/${data.image}`).default;
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;    
    const nextClickHandler=(e)=>{
        if(selected === '') {
            return setError('Selecione uma opção!');
        }
        onAnswerUpdate(prevState => [...prevState,{q: data.question, a: selected}]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1){
            onSetActiveQuestion(activeQuestion + 1);
        }else{
            onSetStep(finalStep);    
        }
    }

    if(counter < 1){
        onSetStep(finalStep);
    }
    
    return(
        <div class ="home">
            <center>
            <h1 class ="text-question">{activeQuestion+1}/{numberOfQuestions} {minutes}:{(seconds > 9 ? seconds : '0' + seconds)}</h1>
            <h2 class ="text-question">{data.question}</h2>
            <img class ="option-image" src = {image}></img>
            <div class="buttons">
            {data.choices.map((choice, i) =>(
            <div class ="button-wrapper">
                <button className={(selected === choice ? 'selected': '')} name="answer" value={choice} onClick={changeHandler}>{choice}</button>
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