// import { getJsQuestions } from "../../data/quizJS";
// import { getTsQuestions } from "../../data/quizTS";
// import { getCssQuestions } from "../../data/quizCSS";
// import { getHtmlQuestions } from "../../data/quizHTML";
import React, { useState, useEffect } from 'react';
import QuizTestStartPage from './quizTestStartPage'

import Question from './question'
import QuizMenu from './quizMenu'
import Pagination from '../pagination.js'

function QuizTestMode(props){
    const [categories, setCategories] = useState([]);
    // const [hardnessLevel, setHardnessLevel] = useState('easy');
    // const [nrOfQuestions, setNrOfQuestions] = useState(4);
    const [currentQuestionNr, setCurrentQuestionNr] = useState(-1);
    const [answers, setCurrentAnswers] = useState([]);
    const [setOfQuestions, setSetOfQuestions] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    function startQuiz(){setCurrentQuestionNr(0);}
    function JumpToQuestion(nr){setCurrentQuestionNr(nr);}
    function nextQuestion(){setCurrentQuestionNr(currentQuestionNr + 1);}
    function prevQuestion(){setCurrentQuestionNr(currentQuestionNr - 1);}

    useEffect(()=>{console.log(answers)})

    function StartTestPageIfApplicable(){
        if (currentQuestionNr == -1) return (
            <QuizTestStartPage categoriesHandel={[categories, setCategories]}
            // hardnessLevelHandel={[hardnessLevel, setHardnessLevel]}
            // nrOfQuestionsHandel={[nrOfQuestions, setNrOfQuestions]}
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
                isQuizFinishedHandel={[isQuizFinished, setIsQuizFinished]}
                currentQuestionDescriptor={setOfQuestions[currentQuestionNr]}
                currentQuestionNr = {currentQuestionNr}
                // nrOfQuestions = {nrOfQuestions}
                nrOfQuestions = {setOfQuestions.length}
                />                    
            )
        }
        return <></>
    }
    function PaggiationIfApplicable(){
        let nrOfQuestions = setOfQuestions.length;
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
        <>
            <StartTestPageIfApplicable />
            <QuestionIfApplicable />
            <QuizMenuIfApplicable />
            <PaggiationIfApplicable />
        </>
    );
}


export default QuizTestMode;