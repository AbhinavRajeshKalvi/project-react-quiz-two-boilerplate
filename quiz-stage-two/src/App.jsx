import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions.jsx";
import Result from "./components/Result.jsx";
import QuestionBox from "./components/QuestionBox.jsx"; 
import Start from './components/Start'
import "./components/style.css" 



function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <QuestionBox /> : <Start props={setStart} />} 
    </div>
  );
}

export default App;