// import { getJsQuestions } from "../../data/quizJS";
// import { getTsQuestions } from "../../data/quizTS";
// import { getCssQuestions } from "../../data/quizCSS";
// import { getHtmlQuestions } from "../../data/quizHTML";
import React, { useState, useEffect } from 'react';
import QuizStartPage from './quizStartPage'
import QuizMenu from './quizMenu'


import Question from './question'
import Pagination from '../pagination.js'

function QuizMain(props){
    const [categories, setCategories] = useState([]);
    const [hardnessLevel, setHardnessLevel] = useState('easy');
    const [nrOfQuestions, setNrOfQuestions] = useState(4);
    const [currentQuestionNr, setCurrentQuestionNr] = useState(-1);
    const [answers, setCurrentAnswers] = useState([]);
    const [setOfQuestions, setSetOfQuestions] = useState([]);
    const [isQuizFinished, setIsQuisFinished] = useState(false);
    function startQuiz(){setCurrentQuestionNr(0);}
    function JumpToQuestion(nr){setCurrentQuestionNr(nr);}
    function nextQuestion(){setCurrentQuestionNr(currentQuestionNr + 1);}
    function prevQuestion(){setCurrentQuestionNr(currentQuestionNr - 1);}

    useEffect(()=>{console.log(answers)})

    function StartPageIfApplicable(){
        if (currentQuestionNr === -1) return (
            <QuizStartPage categoriesHandel={[categories, setCategories]}
            hardnessLevelHandel={[hardnessLevel, setHardnessLevel]}
            nrOfQuestionsHandel={[nrOfQuestions, setNrOfQuestions]}
            currentQuestionNrHandel={[currentQuestionNr, setCurrentQuestionNr]}
            setOfQuestionsHandel  = {[setOfQuestions, setSetOfQuestions]}
            currentQuestionDescriptor = {setOfQuestions[currentQuestionNr]}
            setCurrentAnswers = {setCurrentAnswers}
            answers = {answers}
        />
        )
        return <></>
    }
    function QuestionIfApplicable(){
        if ((currentQuestionNr > -1) && (!isQuizFinished)){
            return (
                <Question currentQuestionNrHandel={[currentQuestionNr, setCurrentQuestionNr]}
                answersHandel={[answers, setCurrentAnswers]}
                isQuizFinishedHandel={[isQuizFinished, setIsQuisFinished]}
                currentQuestionDescriptor={setOfQuestions[currentQuestionNr]}
                currentQuestionNr = {currentQuestionNr}
                nrOfQuestions = {nrOfQuestions}
                
                />                    
            )
        }
        return <></>
    }
    function PaggiationIfApplicable(){
        if ((currentQuestionNr > -1) && (!isQuizFinished)){
            return (
                <Pagination maxNrOfItems = {nrOfQuestions}
                currentItemNrHandel = {[currentQuestionNr, setCurrentQuestionNr]}
                />
            )
        }
        return <></>;
    }

    function QuizMenuIfApplicable(){
        if ((currentQuestionNr > -1) && (!isQuizFinished)){
            return (
                <QuizMenu allQuestionsDescriptors = {setOfQuestions} userAnswers={answers}/>
            )
        }
        return <></>;
    }
    
    return (
        // (currentQuestionNr == -1)?
        // <QuizStartPage categoriesHandel={[categories, setCategories]}
        //     hardnessLevelHandel={[hardnessLevel, setHardnessLevel]}
        //     nrOfQuestionsHandel={[nrOfQuestions, setNrOfQuestions]}
        //     currentQuestionNrHandel={[currentQuestionNr, setCurrentQuestionNr]}
        // />
        // :''
        <>
            <StartPageIfApplicable />
            <QuestionIfApplicable />
            <QuizMenuIfApplicable />
            <PaggiationIfApplicable />
        </>
        
        // ((currentQuestionNr > -1) && (!isQuizFinished))?
        // <Question currentQuestionNrHandel={[currentQuestionNr, setCurrentQuestionNr]}
        //     answersHandel={[answers, setCurrentAnswers]}
        //     isQuizFinished={[isQuizFinished, setIsQuisFinished]}
        // />:''
    );
}

// function getSetOfQuestions(nrOfQuestions, hardnessLevel, categories){
//     let setOfQuestions = getQuestionDataBase(hardnessLevel, categories);
//     let nrOfQuestionsFromDB = setOfQuestions.length;
//     if (nrOfQuestionsFromDB < nrOfQuestions) return [];
//     if (nrOfQuestionsFromDB == nrOfQuestions) return setOfQuestions;
//     let newSetOfQuestions = [];
//     for (let i = 0; i < nrOfQuestions; i++){
//         let randomQuestionId = randomNumber(nrOfQuestionsFromDB.length);
//         newSetOfQuestions.push(setOfQuestions[randomQuestionId]);
//         setOfQuestions.splice(randomQuestionId, 1);
//     }
//     return newSetOfQuestions;
// }

// function randomNumber(maxVal){
//     let max = Math.floor(maxVal)
//     return Math.floor(Math.random() * max);
// }

// function getQuestionDataBase(hardnessLevel, categories){
//     let concatenatedDB = [];
//     if (categories.includes('js')) concatenatedDB.concat(getJsQuestions());
//     if (categories.includes('ts')) concatenatedDB.concat(getTsQuestions());
//     if (categories.includes('css')) concatenatedDB.concat(getCssQuestions());
//     if (categories.includes('html')) concatenatedDB.concat(getHtmlQuestions());
//     function isQuestionDifficultEnough(element){
//         return element.level == hardnessLevel
//     }
//     return concatenatedDB.filter(isQuestionDifficultEnough);
// }

export default QuizMain;