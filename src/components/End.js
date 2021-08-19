import React,{useEffect, useState} from'react';

const End = ({results, data}) => {
    const [correctAnswers, setCorrectAsnwers] = useState(0);
    useEffect(()=>{
        let correct = 0;
        results.forEach((result, index)=>{
            console.log(result.a)
            if(result.a === data[index].answer){
                correct++;
            }
        });
        setCorrectAsnwers(correct);
    },[]);
    return(
        <div>
            <p class = "text-question">{correctAnswers}</p>
        </div>
    )
}
export default End;