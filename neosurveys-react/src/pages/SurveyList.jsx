import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyCard from "../components/SurveyCard";
import {services, Get} from "../services/crud.services";

/**
 * Survey Browsing page
 * @returns 
 */
const SurveyList = ()=> {

    //survey list as a state
    const [surveyList, setSurveyList] = useState([]);

    //navigation in order to be able to navigate on action
    let navigate = useNavigate();

    //the useEffect responsible for getting the list of available surveys
    useEffect(() => {
        Get(services.LIST_SURVEYS)
        .then((result)=>{
            setSurveyList(result.data);
        });
    },[]);


    return (
        <div className="min-h-screen grid content-center justify-items-center 
        bg-gradient-to-r from-baby-blue/10 to-azure/10">
            <p className="m-4 mt-6 text-2xl font-bold text-center">
                Browse surveys and take some of them
            </p>

            <div className="sm:w-4/5 w-[90%] sm:my-5 my-3 
                    mx-auto grid sm:grid-cols-2 grid-cols-1">
                {
                    surveyList?.map( survey => (
                        <SurveyCard 
                            name={survey.name} 
                            key={survey.id} 
                            onClick={()=>{
                                //navigating to survey page with a specified survey id
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