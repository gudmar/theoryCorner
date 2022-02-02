import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QuizMain from './components/quiz/quizMain';
import quizTestMode from './components/quiz/quizTestMode';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TestDedicatedWorker from './testComponents/dedicatedWorker';
import TestSharedWorker from './testComponents/sharedWorker';
import StopWatchState from './testComponents/stopWatchState';
import { getTheoryData } from './data/theoryData';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import QuizTestMode from './components/quiz/quizTestMode';

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   ,
//   document.getElementById('root')
// );
function getTheoryDataForRouting(){
  return getTheoryData();
}
function getRoutesFromTheoryData(){

}

ReactDOM.render(
  <React.StrictMode>
  {/* <BrowserRouter> */}
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<App />} />
      <Route path="/theory/:topic" element={<App/>} />
      <Route path="quiz" element={<QuizMain />} />
      <Route path="quizTestMode" element={<QuizTestMode />} />
      <Route path="dedicatedWobWorker" element={<TestDedicatedWorker />} />
      <Route path="sharedWebWorker" element={<TestSharedWorker />} />
      
      {/* <Route path="stopWatchState" element={<StopWatchState />} /> */}
    </Routes>
  </HashRouter>
  {/* </BrowserRouter> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

{/* ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
      
  </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
); */}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
