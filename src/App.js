import React, {useState, useEffect} from 'react';
import Start from './components/Start'
import './App.css';
import End from './components/End'
import Questions from './components/Questions';
import quizData from './data/quiz.json'
import quizData_med from './data/quiz_med.json';
import quizData_hard from './data/quiz_hard.json'

function getRandom(arr) {
  let myArr = [...arr];  //copy arr we pass in
  let randomizedArr = []; //gets popuated by loop

  while (myArr.length > 0) {
      var randomIndex = Math.floor(Math.random() * myArr.length); //create random number
      randomizedArr.push(myArr[randomIndex]); //add choice randomly to arr
      myArr.splice(randomIndex, 1); //cut out a piece of the array then resart loop
      console.log(randomIndex);
  }
  //when loop has finished, return random array
  return randomizedArr;
}

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([])


  const quizStartHandler = () =>{
    setStep(2);
  }
  const quizStartHandler_med = () =>{
    setStep(3);
  }
  const quizStartHandler_hard = () =>{
    setStep(4);
  }

  const questions = quizData.data;
  var random = getRandom(questions)

return (
  <div class = "App">
      {step === 1 && <Start 
      onQuizStart ={quizStartHandler}
      onQuizStart_med={quizStartHandler_med}
      onQuizStart_hard={quizStartHandler_hard}  
      />}
      {step === 2 && <Questions data={random[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={10} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
      {step === 3 && <Questions data={quizData_med.data[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={quizData_med.data.length} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
      {step === 4 && <Questions data={quizData_hard.data[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={quizData_hard.data.length} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
      {step === 5 && <End 
      results={answers}
      data={random && quizData_med.data && quizData_hard.data}

      />}
    </div>
  );
}

export default App;
