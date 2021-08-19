import React, {useState, useEffect} from 'react';
import Start from './components/Start'
import './App.css';
import Questions from './components/Questions';
import quizData from './data/quiz.json'
function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([])

  const quizStartHandler = () =>{
    setStep(2);
  }


  return (
    <div class = "App">
      {step === 1 && <Start onQuizStart ={quizStartHandler} />}
      {step === 2 && <Questions data={quizData.data[activeQuestion]} 
      onAnswerUpdate={setAnswers} 
      numberOfQuestions={quizData.data.length} 
      activeQuestion={activeQuestion}
      onSetActiveQuestion={setActiveQuestion}
      onSetStep={setStep}
      />}
    </div>
  );
}

export default App;
