{/* <Question questionNrHandel={[questionNr, setquestionNr]}
answersHandel={[answers, setCurrentAnswers]}
isQuizFinished={[isQuizFinished, setIsQuisFinished]}
currentQuestionContent={setOfQuestions[questionNr]} */}



function Question(props){
    let [answers, setCurrentAnswers] = props.answersHandel;
    let [isQuizFinished, setIsQuisFinished] = props.isQuizFinishedHandel;
    let currentQuestionContent = props.currentQuestionDescriptor;
    let questionNr = props.currentQuestionNr;
    let nrOfQuestions = props.nrOfQuestions;
    let qCategory = currentQuestionContent.category;
    let qLevel = currentQuestionContent.level;
    let qSubcategory = currentQuestionContent.subcategory;
    let qContent = currentQuestionContent.question;
    let qAnswers = currentQuestionContent.answers;
    let qCorrectAnswerId = currentQuestionContent.correctAnswersIds;
    let qCorrectAnswersFillIn = currentQuestionContent.correctAnswers
    let qType = currentQuestionContent.type;

    function setAnswer(questionId, userAnswerOriginalIndex){
        // answers[questionId].userAnswerOriginalId = userAnswerOriginalIndex;
        return function(event){
            let value = event.target.value;
            let elementType=event.target.type; //'radio'/'checkbox'
            let isChecked = event.target.checked; //true/false
            if (elementType == 'radio') setRadio(value);
            else if (elementType == 'checkbox') setCheckBox(value);
            else console.warn(`question.js: What? Target should be either radio or change and is ${elementType}`)
        }
    }

    function setRadio(value){
        answers[questionNr] = [value]
        setCurrentAnswers(answers)
    }

    function setCheckBox(value){
        let isElementInAnswers = answers[questionNr].includes(value);
        if (isElementInAnswers == false) answers[questionNr].push(value);
        else {
            let indexOfValueInCurrentAnswers = answers[questionNr].findIndex(
                (element)=>{
                    return value == element;
                }
            )
            answers[questionNr].splice(indexOfValueInCurrentAnswers, 1);
            
        }
        setCurrentAnswers(answers);
    }

    function setFillInAnswer(rowId, colId, value){
        function getFillInAnswersFromDBSizes(arrOfArrays){
            return arrOfArrays.map((item)=>{return item.split('{{{}}}').length - 1})
        }
        function fillWithEmptyArrays(arr, howManyEmptyArrays){
            let len = arr.length;
            if (len < howManyEmptyArrays) {
                // arr = [...Array(howManyEmptyArrays).fill([])]
                for(let i=0; i<howManyEmptyArrays - len; i++){
                    arr.push([])
                }
            }
            
        }
        function fillEachRowWithEmptyArrays(arrOfArrays, arrOfLengths){
            for (let i = 0; i<arrOfArrays.length; i++){
                let arrLen = arrOfArrays[i].length;
                let howManyArraysShouldBe = arrOfLengths[i];
                fillWithEmptyArrays(arrOfArrays[i], howManyArraysShouldBe);
            }
        }
        let lastAnswer = answers[questionNr];
        let answersFromDB = qAnswers;//[questionNr];
        let answersFromDBSizes = getFillInAnswersFromDBSizes(answersFromDB);
        fillWithEmptyArrays(lastAnswer, answersFromDBSizes.length)
        fillEachRowWithEmptyArrays(lastAnswer, answersFromDBSizes)
        lastAnswer[rowId][colId] = value;
        answers[questionNr] = lastAnswer;
        setCurrentAnswers(answers);
        console.log(lastAnswer)
    }

    function shouldBeChecked(originalValue){
        return answers[questionNr].includes(originalValue.toString()); // original value is index of answer in data/quizXX.js service,
        //later this order is shufled randomly, but original value is kept for evaluation purposes;
    }

    function applicatoinShouldSwitchToRaportView(event){
        setIsQuisFinished(true);
    }



    function RatioAnswersIfApplicable(){
        if(qType=='radio') return (
            <form onSubmit={applicatoinShouldSwitchToRaportView}>
                {qAnswers.map((answer, index)=>{
                    return (
                        <div className="form-check"
                            key={answer.originalIndex}
                        >
                            <input type="radio" 
                                className="form-check-input" 
                                id={`radio${index}`} 
                                name="answers" 
                                value={answer.originalIndex}
                                onChange={setAnswer(questionNr, index)}
                                defaultChecked={shouldBeChecked(answer.originalIndex)}
                            />
                            <label className="fomr-check-label" htmlFor={`radio${index}`}>
                                {answer.content}
                            </label>
                        </div>
                    )
                })}
            </form>
        )
        return <></>
    }

    function FillInAnswersIfApplicable(){
        function divideQuestionToSubstrings(question){
            return question.trim().split('{{{}}}');
        }
        function setAnswerLocal(answerIndex, fillInFieldInAnswerIndex){
            //answerIndex is row, fillInFieldInAnswerIndex is column
            // let questionNr = questionIndex;
            let answerId = answerIndex; 
            let fieldId = fillInFieldInAnswerIndex;
            return function(event){
                let content = event.target.value.trim();
                setFillInAnswer(answerId, fieldId, content)
            }
        }
        function getFillInAnswerValue(answerNr, fieldNr){
            let answerToSearchIn = answers[questionNr];
            if (!Array.isArray(answerToSearchIn)) return '';
            if (answerToSearchIn[answerNr] == undefined) return '';
            if (answerToSearchIn[answerNr][fieldNr] == undefined) return '';
            return answerToSearchIn[answerNr][fieldNr];
        }

        function calculateTextInputLengthBasedOnAnswer(answerRow, answerCol){
            let currentFillInAnswers = qCorrectAnswersFillIn;
            let nrOfCharsInOneInputSizeUnit = 2;
            let queriedAnswer = currentFillInAnswers[answerRow][answerCol];
            let inputSize = Math.ceil(queriedAnswer.length/nrOfCharsInOneInputSizeUnit) + 2;
            return inputSize;
        }

        function getSingleAnswer(answerString, answerNr){
            let dividedAnswer = divideQuestionToSubstrings(answerString)
            return (
                <div key={answerString}>
                    {dividedAnswer.map((subString, fieldNr)=>{
                        return (
                            <span key={fieldNr}>
                                <span dangerouslySetInnerHTML={getDangerousHTML(subString)}></span>
                                {(fieldNr < dividedAnswer.length - 1)?
                                    <input size={calculateTextInputLengthBasedOnAnswer(answerNr,fieldNr).toString()} type="text" 
                                        onBlur={setAnswerLocal(answerNr,fieldNr)}
                                        defaultValue = {getFillInAnswerValue(answerNr, fieldNr)}
                                    />
                                :
                                    <></>
                                }
                            </span>
                        )
                    })}
                </div>
            )
        }
        if (qType == 'fill-in') return (
            qAnswers.map((answer, index)=>{
                return (
                    <>
                        <div className="card bg-light text-dark" key={index}>
                            <div className="card-body">
                                {getSingleAnswer(answer, index)}
                            </div>
                        </div>
                        <br/>
                    </>
                )

            })
        )
        return <></>
    }

    function CheckboxAnswersIfApplicable(){
        if(qType=='checkbox') return (
            <form onSubmit={applicatoinShouldSwitchToRaportView}>
                {qAnswers.map((answer, index)=>{
                    return (
                        <div className="form-check"
                            key={answer.originalIndex}
                        >
                            <input type="checkbox" 
                                className="form-check-input" 
                                
                                id={`checkbox${index}`} 
                                name="answers" 
                                value={answer.originalIndex}
                                onChange={setAnswer(questionNr, index)}
                                defaultChecked={shouldBeChecked(answer.originalIndex)}
                            />
                            <label className="form-check-label" htmlFor={`checkobox${index}`}>
                                {answer.content}
                            </label>
                        </div>
                    )
                })}
            </form>
        )
        return <></>
    }
    return (
    <div className="container">
    <h3>Question {questionNr + 1} of {nrOfQuestions}</h3>
        <span className="badge rounded-pill bg-primary">{qCategory}</span>
        <span className="badge rounded-pill bg-primary">{qSubcategory}</span>
        <span className="badge rounded-pill bg-primary">{qLevel}</span>
        <div className="alert alert-light" dangerouslySetInnerHTML={getDangerousHTML(qContent)}>
        </div>
        <RatioAnswersIfApplicable />
        <CheckboxAnswersIfApplicable />
        <FillInAnswersIfApplicable />
    </div>
)
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default Question;