{/* <Question currentQuestionNrHandel={[currentQuestionNr, setCurrentQuestionNr]}
answersHandel={[answers, setCurrentAnswers]}
isQuizFinished={[isQuizFinished, setIsQuisFinished]}
currentQuestionContent={setOfQuestions[currentQuestionNr]} */}



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
    let qType = currentQuestionContent.type;
    console.log(qContent)

    function setAnswer(questionId, userAnswerOriginalIndex){
        // answers[questionId].userAnswerOriginalId = userAnswerOriginalIndex;
        return function(event){
            console.dir(event)
        }
    }

    function applicatoinShouldSwitchToRaportView(){
        setIsQuisFinished(true);
    }

    function RatioAnswersIfApplicable(){
        if(qType=='radio') return (
            <form onSubmit="applicatoinShouldSwitchToRaportView()">
                {qAnswers.map((answer, index)=>{
                    return (
                        <div className="form-check">
                            <input type="radio" 
                                className="form-check-input" 
                                id={`radio${index}`} 
                                name="answers" 
                                value={answer.originalIndex}
                                onChange={setAnswer(questionNr, index)}
                                // defaultChecked={answers[questionNr].u}
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

    function CheckboxAnswersIfApplicable(){
        if(qType=='checkbox') return (
            <form onSubmit="applicatoinShouldSwitchToRaportView()">
                {qAnswers.map((answer, index)=>{
                    return (
                        <div className="form-check">
                            <input type="checkbox" 
                                className="form-check-input" 
                                id={`checkbox${index}`} 
                                name="answers" 
                                value={answer.originalIndex}
                                onChange={setAnswer(questionNr, index)}
                                // defaultChecked={answers[questionNr].u}
                            />
                            <label className="fomr-check-label" htmlFor={`checkobox${index}`}>
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
        <span className="bage rounded-pill bg-primary">{qCategory}</span>
        <span className="bage rounded-pill bg-primary">{qSubcategory}</span>
        <span className="bage rounded-pill bg-primary">{qLevel}</span>
        <div className="alert alert-light" dangerouslySetInnerHTML={getDangerousHTML(qContent)}>
        </div>
        <RatioAnswersIfApplicable />
        <CheckboxAnswersIfApplicable />
        

    </div>
)
}

function getDangerousHTML(content){
    return {
        __html: content
    };
}

export default Question;