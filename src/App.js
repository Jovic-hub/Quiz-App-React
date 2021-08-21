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

const questions = quizData.data;
const questions_med = quizData_med.data;
const questions_hard = quizData_hard.data;
var random = getRandom(questions)
var random_med = getRandom(questions_med)
var random_hard = getRandom(questions_hard)

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


return (
  <div class = "App">
      {step === 1 && <Start 
      onQuizStart ={quizStartHandler}
      onQuizStart_med={quizStartHandler_med}
      onQuizStart_hard={quizStartHandler_hard}  
      />}
      {step === 2 && <Questions data={random[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={5} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      finalStep={5}
      />}
      {step === 3 && <Questions data={random_med[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={5} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      finalStep={6}
      />}
      {step === 4 && <Questions data={random_hard[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={5} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      finalStep={7}
      />}
      {step === 5 && <End 
      results={answers}
      data={random}
      />}
      {step === 6 && <End 
      results={answers}
      data={random_med}
      />}
      {step === 7 && <End 
      results={answers}
      data={random_hard}
      />}
    </div>
  );
}

export default App;
