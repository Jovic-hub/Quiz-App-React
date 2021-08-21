import React,{useEffect, useState} from'react';

const End = ({results, data}) => {
    const [correctAnswers, setCorrectAsnwers] = useState(0);
    useEffect(()=>{
        let correct = 0;
        results.forEach((result, index)=>{
            console.log(data[index].answer)
            if(result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAsnwers(correct);
    },[]);
    if(correctAnswers < 5){
    return(
        <div>
            <p class = "text-question">{correctAnswers}</p>
            <p>Falhou</p>
        </div>
    )
    }else{
    return(
        <div>
            <p class = "text-question">{correctAnswers}</p>
            <p>Parabens</p>
        </div>
    )
    }
}
export default End;