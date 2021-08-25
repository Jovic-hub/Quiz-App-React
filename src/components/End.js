import React,{useEffect, useState} from'react';
import easy_1 from './images/easy_result_higher_5.jpg'
import easy_2 from './images/easy_result_higher_3.jpg'
import easy_3 from './images/easy_result_higher_1.jpg'
import med_1 from './images/med_result_1.jpg'
import med_2 from './images/med_result_2.jpg'
import med_3 from './images/med_result_3.jpg'
const End = ({results, data, diff}) => {
    const [correctAnswers, setCorrectAsnwers] = useState(0);
    useEffect(()=>{
        let correct = 0;
        results.forEach((result, index)=>{
            if(result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAsnwers(correct);
    },[]);
    if(diff == 1){
        let numOfQuest = 5;
        if(correctAnswers >= 4){
            return(
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Fácil</h2>
                    <h3>Mandou bem, acho que está na hora de mudar de dificuldade.</h3>
                    </div>
                    <img class ="option-image" src ={easy_1}></img> 
                    </div>
                </center>
            )         
        }else if(correctAnswers == 3){
            return(
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Fácil</h2>
                    <h3>Foi quase, que tal tentar novamente?</h3>
                    </div>
                    <img class ="option-image" src ={easy_2}></img> 
                    </div>
                </center>
            ) 
        }else{
            return(         
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Fácil</h2>
                    <h3>Você já assistiu Hunter x Hunter?</h3>
                    </div>
                    <img class ="option-image" src ={easy_3}></img> 
                    </div>
                </center>
            )
        }
    }else if(diff == 2){
        let numOfQuest = 7;
        if(correctAnswers >= 6){
            return(
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Médio</h2>
                    <h3>Você está pronto pra próxima dificuldade.</h3>
                    </div>
                    <img class ="option-image" src ={med_3}></img> 
                    </div>
                </center>
            )         
        }else if(correctAnswers >= 4 && correctAnswers <= 5){
            return(
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Médio</h2>
                    <h3>Foi quase, que tal tentar novamente?</h3>
                    </div>
                    <img class ="option-image" src ={med_2}></img> 
                    </div>
                </center>
            ) 
        }else{
            return(         
                <center>
                    <div class ="buttons-end">
                    <div class ="button-wrapper-end">
                    <h1>Seu Resultado</h1>
                    <h2>Acertos: {correctAnswers}</h2>
                    <h2>Erros: {numOfQuest- correctAnswers}</h2>
                    <h2>Dificuldade: Médio</h2>
                    <h3>Talvez seja melhor diminuir a dificuldade.</h3>
                    </div>
                    <img class ="option-image" src ={med_1}></img> 
                    </div>
                </center>
            )
        }
    }else if(diff == 3){
        return(
            <a>Not done yet</a>
        )
    }
}
export default End;