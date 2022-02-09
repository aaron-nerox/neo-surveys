import { useState } from 'react';
import logo from "../assets/icons/main_logo.png"
import StatementInput from "../components/StatementInput";


const CreateSurvey = ()=>{
    const [surveyQuestions, setSurveyQuestions] = useState([]);
    const [surveyTitle, setSurveyTitle] = useState("");

    function createEmptyQuestion(){
        surveyQuestions.push({"statement" : ""})
        setSurveyQuestions([...surveyQuestions]);
    }

    function updateQuestion(newQuestion, index){
        surveyQuestions[index].statement = newQuestion
        setSurveyQuestions(surveyQuestions);
        console.log(surveyQuestions);
    }

    return (
        <div className="min-h-screen grid content-center justify-items-center">
            <p className="m-4 mt-6 text-2xl font-bold">
                Create your own survey
            </p>

            <div className="w-3/4 my-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-col 
            items-start rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
            transition-all">
                <p className="mx-2 mt-1 font-semibold text-xl">
                    What is your survey's title?
                </p>
                <input type="text" 
                        className="m-4 p-4 h-13 w-3/5 rounded-xl outline-none"
                        name="question-input"
                        placeholder="Your surveys title"
                        value={surveyTitle}
                        onChange={event => {
                            setSurveyTitle(event.target.value);
                            console.log(event.target.value);
                        }} />
            </div>

            <div className="w-3/4 mx-auto">{
                surveyQuestions?.map((question, index) =>(
                    <StatementInput 
                        key={index}
                        statement={question.statement}
                        onChange={event => {
                            updateQuestion(event.target.value, index);
                        }}
                    />
                ))
            }</div>

            <div 
                onClick={createEmptyQuestion}
                className="w-3/4 m-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-row 
                    items-center rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
                    transition-all opacity-50 hover:opacity-70">

                <div className="min-w-[90%] inline-flex flex-col items-start">
                    <p className="mx-4 mt-1 font-semibold text-xl">
                        What is your question?
                    </p>
                    <input  className="m-4 p-4 h-13 w-3/5 rounded-xl outline-none" 
                            type="text" 
                            name="question-input" 
                            placeholder="Your question here"
                            disabled
                    />
                </div>

                <img src={logo} alt="add" className="max-w-[10%]"/>

            </div>
        </div>
    );
}

export default CreateSurvey;