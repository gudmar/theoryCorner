import {checkIfAllAnswersAreGiven, getCorrectnessReport} from "../../services/quizAnswerEvaluator"

function QuizMenu(props){
    const allQuestionsDescriptors = props.allQuestionsDescriptors; 
    const userAnswers = props.userAnswers;
    console.log(allQuestionsDescriptors)
    console.log(userAnswers)

    return (
        <div className="container my-3">
            <a href="../"><button type="button" className="btn btn-primary">Back to theory</button></a>
            <button type="submit" className="btn btn-primary mx-3" 
                onClick={getCorrectnessReport.bind(this,allQuestionsDescriptors,userAnswers)}>
                Submit answers
            </button>
        </div>
    )
}

export default QuizMenu;