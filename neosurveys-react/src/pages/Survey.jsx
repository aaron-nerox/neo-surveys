import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {services, Get, Post} from "../services/crud.services";
import QuestionCard from "../components/QuestionCard";

const Survey = ()=>{
    let urlParams = useParams();
    const [survey, setSurvey] = useState({});
    const [surveyAnswer,setSurveyAnswer] = useState({});
    const [isResultAvailable, setIsResultAvailable] = useState(false);

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

    function createResult(){

        Post(services.RESULT_SURVEY, surveyAnswer, surveyAnswer.idSurvey)
        .then((result)=>{
            console.log(result.data);
        });
    }

    return (
        <div className="min-h-screen grid content-center justify-items-center">
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