import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyCard from "../components/SurveyCard";
import {services, Get} from "../services/crud.services";

const SurveyList = ()=>{
    const [surveyList, setSurveyList] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        Get(services.LIST_SURVEYS, {})
        .then((result)=>{
            setSurveyList(result.data);
        });
    },[]);

    return (
        <div className="min-h-screen grid content-center justify-items-center">
            <p className="m-4 mt-6 text-2xl font-bold">
                Browse surveys and take some of them
            </p>

            <div className="w-4/5 my-5 mx-auto grid grid-cols-2">
                {
                    surveyList?.map( survey => (
                        <SurveyCard 
                            name={survey.name} 
                            key={survey.id} 
                            onClick={()=>{
                                navigate(`/survey/${survey.id}`)
                                }   
                            }
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default SurveyList;