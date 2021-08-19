import React from 'react';
import './index.css';
import facil from './facil.png'
import medio from './medio.jpg'
import dificil from './dificil.jpg'


const Start = ({onQuizStart})=>{
    return(
        <div class ="home">
            <center>
            <h1 class ="text-home">Bem vindo ao Quiz de Hunter x Hunter</h1>
            <h2 class ="text">Selecione sua dificuldade:</h2>
            <div class ="inline">
                <button class ="button-easy"onClick={onQuizStart}><span class="front">Fácil</span></button>
                <img class ="icon" onClick={onQuizStart} src={facil}/>
            </div>
            <div class ="inline">
                <button class ="button-medium"onClick={onQuizStart}>Médio</button>
                <img class ="icon" onClick={onQuizStart}  src={medio}/>
            </div>
            <div class ="inline">
                <button class ="button-hard"onClick={onQuizStart}>Díficil</button>
                <img class ="icon" onClick={onQuizStart} src={dificil}/>
            </div>
            </center>
        </div>
    );
}

export default Start;