import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {services, Get, Post} from "../services/crud.services";
import QuestionCard from "../components/QuestionCard";
import ResultModal from "../components/ResultModal";

/**
 * Survey taking page
 * @returns 
 */
const Survey = ()=>{

    //useParams to capture the navigation parameters (idSurvey)
    let urlParams = useParams();

    //survey object as a state
    const [survey, setSurvey] = useState({});

    //survey answer object as a state
    const [surveyAnswer,setSurveyAnswer] = useState({});

    //a state to controll when to show the "show result" button
    const [isResultAvailable, setIsResultAvailable] = useState(false);

    //a state to controll when to show the results modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //the results array as a state
    const [results, setResults] = useState([])

    //the useEffect responsible for getting the survey by id
    useEffect(()=>{
        Get(services.LIST_SURVEYS, urlParams.idSurvey)
        .then((result)=>{
            setSurvey(result.data);
            let initAnswer = {
                "idSurvey": result.data.id,
                "answers": result.data.questions
            }
            setSurveyAnswer(initAnswer);
        });
    },[urlParams.idSurvey]);

    /**
     * a function to verify if all the questions on the survey are answered or not
     * if all answered we show the "show result" button
     */
    function checkResultAvailable(){
        let isAllResults = true;
        surveyAnswer.answers.forEach(answer => {
            if(Object.keys(answer).length !== 2){
                isAllResults = false;
            }
        });

        if(isAllResults !== isResultAvailable){
            setIsResultAvailable(isAllResults);
        }
    }

    /**
     * function to submit the survey answers and get the result
     */
    function createResult(){

        Post(services.RESULT_SURVEY, surveyAnswer, surveyAnswer.idSurvey)
        .then((result)=>{
            //todo: add a modal for the result
            console.log(result?.data);
            setResults(result.data);
            openModal();
        });
    }

    /**
     * open the result modal
     */
    function openModal(){
        setIsModalOpen(true);
    }

    /**
     * close the result modal
     */
    function closeModal(){
        setIsModalOpen(false);
    }

    return (
        <div className="min-h-screen grid content-center justify-items-center
        bg-gradient-to-r from-baby-blue/10 to-azure/10">
            <ResultModal 
                results={results}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            />

            <p className="w-4/5 m-2 font-bold text-3xl text-center">
                You are now taking the survey
            </p>
            <p className="m-2 text-xl font-bold">
                {survey?.name}
            </p>

            <div className="my-4 mb-6 w-full mx-auto text-center">
                {
                    survey?.questions?.map( (question, index) => (
                        <QuestionCard 
                            onClick={(answer)=>{
                                surveyAnswer.answers[index].answer = answer;
                                checkResultAvailable();
                            }}
                            statement={question.statement} 
                            key={index}
                        />
                    ))
                }
            </div>

            <button
                onClick={createResult}

                className={`bg-baby-blue px-10 py-4 rounded-2xl m-5 mb-10
                hover:bg-azure transition-all font-bold text-xl text-white 
                shadow-lg shadow-baby-blue/50 hover:shadow-azure/40
                ${isResultAvailable? "" : "hidden"}`}>
                See results
            </button>
        </div>
    );
}

export default Survey;