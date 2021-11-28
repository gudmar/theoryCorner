import {getSetOfQuestions, getAnswersInRandomOrder, getAllQuestionsFromListedCategoriesFromDB} from './getSetOfQuestionsService'

function QuizTestStartPage(props){
    let [categories, setCategories] = props.categoriesHandel;
    // let [hardnessLevel, setHardnessLevel] = props.hardnessLevelHandel;
    // let [nrOfQuestions, setNrOfQuestions] = props.nrOfQuestionsHandel;
    let [currentQuestionNr, setCurrentQuestionNr] = props.currentQuestionNrHandel;
    let [setOfQuestions, setSetOfQuestions] = props.setOfQuestionsHandel;
    let setCurrentAnswers = props.setCurrentAnswers;
    let answers = props.answers;

    function startQuiz(event){
        event.preventDefault();
        function getCategories(event){
            let arrayOfSwitches = event.target.cat;
            let output = [];
            function forSingleValue(element){if(element.checked) output.push(element.value)}
            arrayOfSwitches.forEach(forSingleValue);
            return output;
        }
        const categories = getCategories(event);
        // const hardness = event.target.hardness.value;
        // const nrOfQuestions = parseInt(event.target.nrQuestions.value);
        // setCategories(categories);
        // setHardnessLevel(hardness);
        // setNrOfQuestions(nrOfQuestions);
        // let localSetOfQuestions = getSetOfQuestions(nrOfQuestions, hardness, categories);
        let localSetOfQuestions = getAllQuestionsFromListedCategoriesFromDB(categories)
        let nrOfQuestions = localSetOfQuestions.length;
        shuffleAnswersForWholeSetOfQuestions(localSetOfQuestions);
        setSetOfQuestions(localSetOfQuestions);
        setCurrentAnswers([...Array(nrOfQuestions)].map((i)=>{return[]}));
        setCurrentQuestionNr(0);
    }

    function shuffleAnswersForWholeSetOfQuestions(setOfQuestions){
        // PRE: answers as string[]
        // POST: answers as {originalIndex:number, content: string}[]
        for (let question of setOfQuestions){
            if (canQuestionHaveAnswersShuffled(question)){
                let answers = question.answers;
                let randomizedAnswers = getAnswersInRandomOrder(answers);
                question.answers = randomizedAnswers;    
            }
        }
        return setOfQuestions; //not needed, as work is done on references anyway
    }

    function canQuestionHaveAnswersShuffled(singleQuestionDescriptor){
        let questionsThatMayHaveAnswersShuffled=['radio', 'checkbox'];
        return questionsThatMayHaveAnswersShuffled.includes(singleQuestionDescriptor.type)
    }
    
    return (
        <div className="container">
            <form onSubmit={startQuiz}>
                <div>
                    <h4>Select category</h4>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="jsCatSwitch" name="cat" value="js" defaultChecked />
                        <label className="form-check-label" htmlFor="jsCatSwitch">JS</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="jsCatSwitch" name="cat" value="ts" />
                        <label className="form-check-label" htmlFor="jsCatSwitch">TS</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="jsCatSwitch" name="cat" value="css"/>
                        <label className="form-check-label" htmlFor="jsCatSwitch">CSS</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="jsCatSwitch" name="cat" value="html"/>
                        <label className="form-check-label" htmlFor="jsCatSwitch">HTML</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
                {/* <div>
                    <h4>Select hardness level</h4>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radioEasy" name="hardness" value="easy" defaultChecked/>
                        <label className="form-check-label" htmlFor="radioEasy">Easy</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radioMedium" name="hardness" value="medium" />
                        <label className="form-check-label" htmlFor="radioMedium">Medium</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radioHard" name="hardness" value="hard" />
                        <label className="form-check-label" htmlFor="radioHard">Hard</label>
                    </div>
                </div> */}
                {/* <div>
                    <h4>Select nr of questions</h4>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="nrQuestions1" name="nrQuestions" value="3" defaultChecked />
                        <label className="form-check-label" htmlFor="nrQuestions1">3</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="nrQuestions2" name="nrQuestions" value="10"/>
                        <label className="form-check-label" htmlFor="nrQuestions2">10</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="nrQuestions3" name="nrQuestions" value="20" />
                        <label className="form-check-label" htmlFor="nrQuestions3">20</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </div> */}
    //         </form>
    //     </div>
    // );
}

export default QuizTestStartPage;
