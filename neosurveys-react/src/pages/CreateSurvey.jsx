import { useState } from 'react';
import {services, Post} from "../services/crud.services";
import logo from "../assets/icons/add_icon.png"
import StatementInput from "../components/StatementInput";
import SuccessCard from "../components/SuccessCard";

/**
 * survey creation page
 * @returns 
 */
const CreateSurvey = ()=>{

    //survey questions as an array state
    const [surveyQuestions, setSurveyQuestions] = useState([]);

    //survey title as a state
    const [surveyTitle, setSurveyTitle] = useState("");

    //sucess modal as a state
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * function responsible for adding a an empty question to the ui
     */
    function createEmptyQuestion(){
        surveyQuestions.push({"statement" : ""})
        setSurveyQuestions([...surveyQuestions]);
    }

    /**
     * function responsible to update a question
     * @param {String} newQuestion the new input value for question
     * @param {Int} index the number of the question to update
     */
    function updateQuestion(newQuestion, index){
        surveyQuestions[index].statement = newQuestion
        setSurveyQuestions(surveyQuestions);
    }

    /**
     * function creates a survey and cleans the input
     */
    function createSurvey(){

        //the survey object
        let data = {
            "name": surveyTitle,
            "questions": surveyQuestions
        }

        //the post method to create a survey
        Post(services.CREATE_SURVEY, data)
        .then(result => {
            //after submition is completed we clean the input
            setSurveyTitle("");
            setSurveyQuestions([]);

            //open the modal
            setIsModalOpen(true);
        })
    }

    return (
        <div className="min-h-screen grid content-center justify-items-center
            bg-gradient-to-r from-baby-blue/10 to-azure/10">
            <SuccessCard 
                isOpen={isModalOpen}
                onRequestClose={()=> setIsModalOpen(false)}
            />
            <p className="m-4 mt-6 text-2xl font-bold">
                Create your own survey
            </p>

            <div className="sm:w-3/4 w-[90%] my-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-col 
            items-start rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
            transition-all">
                <p className="mx-2 mt-1 font-semibold text-xl">
                    What is your survey's title?
                </p>
                <input type="text" 
                        className="sm:m-4 my-4 p-4 h-13 sm:w-3/5 w-full rounded-xl outline-none"
                        name="question-input"
                        placeholder="Your surveys title"
                        value={surveyTitle}
                        onChange={event => {
                            setSurveyTitle(event.target.value);
                            console.log(event.target.value);
                        }} />
            </div>

            <div className="sm:w-3/4 w-[90%] mx-auto">{
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
                className="sm:w-3/4 w-[90%] m-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-row 
                    items-center rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
                    transition-all opacity-50 hover:opacity-70">

                <div className="sm:min-w-[90%] min-w-[80%] inline-flex flex-col items-start">
                    <p className="mx-2 mt-1 font-semibold text-xl">
                        What is your question?
                    </p>
                    <input  className="sm:m-4 my-4 p-4 h-13 sm:w-3/5 w-4/5 rounded-xl outline-none" 
                            type="text" 
                            name="question-input" 
                            placeholder="Your question here"
                            disabled
                    />
                </div>

                <img src={logo} alt="add" className="sm:max-w-[10%] max-w-[20%]"/>

            </div>

            <button
                onClick={createSurvey}

                className="bg-baby-blue px-10 py-4 rounded-2xl m-5 mb-10
                hover:bg-azure transition-all font-bold text-xl text-white 
                shadow-lg shadow-baby-blue/50 hover:shadow-azure/40">
                Create survey
            </button>
        </div>
    );
}

export default CreateSurvey;