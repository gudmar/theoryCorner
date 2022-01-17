import { getJsQuestions } from "../../data/quizJS";
import { getTsQuestions } from "../../data/quizTS";
import { getCssQuestions } from "../../data/quizCSS";
import { getHtmlQuestions } from "../../data/quizHTML";

function getAnswersInRandomOrder(answersArray){
    let randomizedAnswers = [];
    let originalArray = answersArray.map((element, index)=>{return {index: index, content: element}})
    for (let i = 0; i < answersArray.length; i++){
        let answersArrayLen = originalArray.length;
        let randomIndex = randomNumber(answersArrayLen);
        randomizedAnswers.push({originalIndex: originalArray[randomIndex].index, content: originalArray[randomIndex].content});
        originalArray.splice(randomIndex, 1);
    }
    return randomizedAnswers;
}

function getSetOfQuestions(nrOfQuestions, hardnessLevel, categories){
    let setOfQuestions = getQuestionDataBase(hardnessLevel, categories);
    let nrOfQuestionsFromDB = setOfQuestions.length;
    if (nrOfQuestionsFromDB < nrOfQuestions) return [];
    if (nrOfQuestionsFromDB === nrOfQuestions) return setOfQuestions;
    let newSetOfQuestions = [];
    for (let i = 0; i < nrOfQuestions; i++){
        let randomQuestionId = randomNumber(nrOfQuestionsFromDB);
        newSetOfQuestions.push(setOfQuestions[randomQuestionId]);
        setOfQuestions.splice(randomQuestionId, 1);
        nrOfQuestionsFromDB = setOfQuestions.length;
    }
    console.log(newSetOfQuestions)
    return newSetOfQuestions;
}

function randomNumber(maxVal){
    let max = Math.floor(maxVal)
    return Math.floor(Math.random() * max);
}

function getAllQuestionsFromListedCategoriesFromDB(categories){
    let concatenatedDB = [];    
    if (categories.includes('js')) concatenatedDB = concatenatedDB.concat(...getJsQuestions());
    if (categories.includes('ts')) concatenatedDB = concatenatedDB.concat(...getTsQuestions());
    if (categories.includes('css')) concatenatedDB = concatenatedDB.concat(...getCssQuestions());
    if (categories.includes('html')) concatenatedDB = concatenatedDB.concat(...getHtmlQuestions());
    return concatenatedDB
}

function getQuestionDataBase(hardnessLevel, categories){
    let concatenatedDB = getAllQuestionsFromListedCategoriesFromDB(categories);
    // let concatenatedDB = [];
    
    // if (categories.includes('js')) concatenatedDB = concatenatedDB.concat(...getJsQuestions());
    // if (categories.includes('ts')) concatenatedDB = concatenatedDB.concat(...getTsQuestions());
    // if (categories.includes('css')) concatenatedDB = concatenatedDB.concat(...getCssQuestions());
    // if (categories.includes('html')) concatenatedDB = concatenatedDB.concat(...getHtmlQuestions());
    function isQuestionDifficultEnough(element){
        return element.level === hardnessLevel
    }
    console.log(concatenatedDB)
    return concatenatedDB.filter(isQuestionDifficultEnough);
}

export {getSetOfQuestions, getAnswersInRandomOrder, getAllQuestionsFromListedCategoriesFromDB};