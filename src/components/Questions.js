import React, {useState, useEffect, useRef}from 'react';
import killua from './images/original.jpg'
const Questions = ({data, onAsnwerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep})=>{
    const nextClickHandler=(e)=>{

    }
    return(
        <center>
        <div class ="question">
            <h2 class ="text-question">Pergunta bla bla bla bla bla bla bla bla</h2>
            <img class ="option-image" src = {killua}></img>
            <div class="grid2x2">
            <div class="box box1"><div>
            <button class ="option" name="answer" value="">Option 1</button>
            </div></div>
            <div class="box box2"><div>            
            <button class ="option" name="answer" value="">Option 2</button>
            </div></div>
            <div class="box box3"><div>            
            <button class ="option" name="answer" value="">Option 3</button>
            </div></div>
            <div class="box box4"><div>            
            <button class ="option" name="answer" value="">Option 4</button>
            </div></div>
            </div>
        </div>
        </center>
)
}

export default Questions;