import { func } from "prop-types";

function checkIfAllAnswersAreGiven(allQuestionDescriptors, userAnswers){
    const correctAnswers = getAnswersFromAllQuestionDescriptors(allQuestionDescriptors);
    let correctAnswersLength = correctAnswers.length;
    let userAnswersLength = userAnswers.length;
    if (correctAnswersLength != userAnswersLength) throw new Error(`${this.constructor.name}: correctANswerLength != userAnswerLenght`);
    for (let i=0; i<userAnswersLength; i++){
        if (checkIfSingleQuestionIsGiven(correctAnswers[i], userAnswers[i]) == false) return false;
    }
    return true;
}

function getCorrectnessReport(allQuestionDescriptors, userAnswers){
    let correctAnswers = getAnswersFromAllQuestionDescriptors(allQuestionDescriptors);
    let fullReport = [];
    console.log(correctAnswers);
    console.log(userAnswers);
    if (!haveArraysSameLength(allQuestionDescriptors, userAnswers)){
        console.error('quizAnswerEvaluator, getCorrectnessReport: userAnswers and allQuestionDescriptors are unequal in lehgth')
    }
    let length = allQuestionDescriptors.length;
    for(let i=0; i<length; i++){
        let questionType = allQuestionDescriptors[i].type;
        let correctAnswers = allQuestionDescriptors[i].answers;
        let isAnswerCorrect = isSingleAnswerCorrect(correctAnswers, userAnswers[i], questionType);
        if (isAnswerCorrect) {
            fullReport.push(getCorrectReport(allQuestionDescriptors[i]));
        } else {
            fullReport.push(getIncorrectReport(allQuestionDescriptors[i], userAnswers[i]))
        }
    }
    return fullReport;
}

function getCorrectReport(correctQuestionDescriptor){
    let questionType = correctQuestionDescriptor.type;
    let answersContent = correctQuestionDescriptor.answers;
    let correctAnswerIndexes = correctQuestionDescriptor.correctAnswersIds;
    let correctAnswersFillIn = correctQuestionDescriptor.correctAnswers;

    let question = correctQuestionDescriptor.question;
    let allAnswers = correctQuestionDescriptor.answers;
    if (questionType == 'fill-in'){
        let correctAnswers = correctQuestionDescriptor.correctAnswers;
        return {
            isCorrect: true,
            question: question,
            allAnswers: allAnswers,
            correctAnswers: correctAnswers
        }
    } else {
        let correctAnswers = mapIndexesToAnswerContent(correctQuestionDescriptor, correctAnswerIndexes);
        return {
            isCorrect: true,
            question: question,
            allAnswers: allAnswers,
            correctAnswers: correctAnswers
        }
    }
}

function getIncorrectReport(correctQuestionDescriptor, userAnswer){
    let questionType = correctQuestionDescriptor.type;
    if (questionType == 'fill-in') return getIncorrectReportFillIn(correctQuestionDescriptor, userAnswer)
    else return getIncorrectReportRadioCheckbox(correctQuestionDescriptor, userAnswer);    
}

function getIncorrectReportFillIn(correctQuestionDescriptor, userAnswer){
    let correctAnswersFillIn = correctQuestionDescriptor.correctAnswers;
    //Content here -> Idea is to write a full question in manner:
    // question_content correct_answer(greenBG) incorrect_answer(redBG) rest_of_question_content
}

function getIncorrectReportRadioCheckbox(correctQuestionDescriptor, userAnswer){
    let answersContent = correctQuestionDescriptor.answers;
    let correctAnswerIndexes = allArrayElementsToInt(correctQuestionDescriptor.correctAnswersIds);
    let userAnswerIds = allArrayElementsToInt(userAnswer);

    let question = correctQuestionDescriptor.question;
    let allAnswers = correctQuestionDescriptor.answers;

    let correctAnswerIdsGivenByUser = getCommonValuesFromArrays(userAnswerIds, correctAnswerIndexes);
    let incorrectAnswersidsGivenByUser = getArr1MissingInArr2(userAnswerIds, correctAnswerIndexes);
    let correctAnswerIdsOmmitedByUser = getArr1MissingInArr2(correctAnswerIndexes, userAnswerIds);

    let correctAnswersContentGivenByUser = mapIndexesToAnswerContent(correctQuestionDescriptor, correctAnswerIdsGivenByUser);
    let incorrectAnswersContentGivenByUser = mapIndexesToAnswerContent(correctQuestionDescriptor, incorrectAnswersidsGivenByUser);
    let correctAnswersOmmitedByUser = mapIndexesToAnswerContent(correctQuestionDescriptor, correctAnswerIdsOmmitedByUser);

    return {
        isCorrect: false,
        question: question,
        allAnswers: allAnswers,
        correctAnswersContentGivenByUser: correctAnswersContentGivenByUser,
        incorrectAnswersContentGivenByUser: incorrectAnswersContentGivenByUser,
        correctAnswersOmmitedByUser: correctAnswersOmmitedByUser
    }
}

function getArr1MissingInArr2(arr1, arr2){
    let missingValues = [];
    for (let item of arr1){
        let isIncluded = arr2.includes(item);
        if(!isIncluded) missingValues.push(item);
    }
    return missingValues;
}

function getCommonValuesFromArrays(arr1, arr2){
    let commonSet = [];
    let combinedArray = arr1.concat(arr2);
    for (let item of combinedArray){
        let isInArr1 = arr1.includes(item);
        let isInArr2 = arr2.includes(item);
        if (isInArr1 && isInArr2) commonSet.push(item);
    }
    return commonSet;
}

function mapIndexesToAnswerContent(correctAnswerDescriptor, indexesArray){
    let indexesAsInt = allArrayElementsToInt(indexesArray);
    let mappedContent = [];
    let correctAnswers = correctAnswerDescriptor.answers;
    function findSingleElement(indexToMap){
        return function(element){
            return element.originalIndex == indexToMap? true : false;
        }
    }
    for (let index of indexesAsInt){
        let correctAnswerContent = correctAnswers.find(findSingleElement(index)).content;
        mappedContent = correctAnswerContent;
    }
    return mappedContent;
}

function isSingleAnswerCorrect(correctAnswer, userAnswer, questionType){
    if(!Array.isArray(correctAnswer) || !Array.isArray(correctAnswer)){
        console.error(`quizANswerEvaluator, isSingleAnswerCorrect: one of given arrays is not an array`);
        console.log(correctAnswer);console.log(userAnswer);
        return false;
    }
    if (questionType == 'radio' || questionType == 'checkbox') {
        return checkIfArraysHaveSameValuesAsString(correctAnswer, userAnswer);
    } else if (questionType == 'fill-in'){
        if (!haveArraysSameLength(correctAnswer, userAnswer)) return false;
        let length = correctAnswer.length;
        for (let i = 0; i<length; i++){
            if (!areArraysEqual(correctAnswer[i], userAnswer[i])) return false;
        }
        return true;
    }
}

function haveArraysSameLength(arr1, arr2){
    let [l1, l2] = [arr1.length, arr2.length];
    if (l1 != l2) return false;
    return true;    
}

function areArraysEqual(arr1, arr2){
    if (!haveArraysSameLength(arr1, arr2)) return false;
    let length = arr1.length;
    for (let i=0; i< length; i++){
        if (arr1[i]!=arr2[i]) return false;
    }
    return true;
}

function checkIfArraysHaveSameValuesAsString(arr1, arr2){
    let arr1String = [...allArrayElementsToString(arr1)];
    let arr2String = [...allArrayElementsToString(arr2)];
    let arrLength = arr1.length;
    if (arrLength != arr2.length) return false;
    for (let item of arr1String){
        let indexInArr2 = arr2String.indexOf(item);
        if (indexInArr2 == -1) return false;
        arr2String.splice(indexInArr2, 1);
    }
    return true;
}

function allArrayElementsToString(arr){
    let arrCp = [...arr];
    for(let item of arrCp){
        if(typeof(item)!="string") item=item.toString();
    }
    return arrCp;
}

function allArrayElementsToInt(arr){
    let arrCp = [...arr];
    for(let item of arrCp){
        if(typeof(item)=="string") item=parseInt(item);
    }
    return arrCp;
}

function checkIfSingleQuestionIsGiven(correctAnswerDescriptor, userAnswer){
    const questionType = correctAnswerDescriptor.type;
    const correctAnswer = correctAnswerDescriptor.answers;
    if (questionType == 'radio' || questionType == "checkbox"){
        return userAnswer != []?true:false;
    } else if (questionType == 'fill-in'){
        return checkIfAllArraysHaveSameLength(correctAnswerDescriptor, userAnswer)
    } else {
        console.error(`${constructor.name}: Question type of ${questionType} is not supported`);
        return false;
    }
}

function checkIfAllArraysHaveSameLength(arraySet1, arraySet2){
    let len1 = arraySet1.length;
    let len2 = arraySet2.length;
    if (len1 != len2) return false;
    for(let i = 0; i < len1 ; i++){
        let item1 = arraySet1[i];
        let item2 = arraySet2[i];
        if (Array.isArray(item1) == false || Array.isArray(item2) == false){
            console.error(`${constructor.name}: checkIfAllArraysHaveSameLenght: one of items is not an array`);
            return false;
        }
        if (item1.length != item2.length) return false
    }
    return true;
}

function getAnswersFromAllQuestionDescriptors(allQuestionDescriptors){
    let answers = [];
    for (let answer of allQuestionDescriptors){
        let questionType = answer.type;
        let questionAnswers = answer.correctAnswers==undefined?answer.correctAnswersIds:answer.correctAnswers;

        answers.push({type:questionType, answers:questionAnswers})
    }
    return answers;
}

export {checkIfAllAnswersAreGiven, getCorrectnessReport};