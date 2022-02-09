import SurveyCard from "../components/SurveyCard";

const SurveyList = ()=>{
    return (
        <div className="w-4/5 mx-auto grid grid-cols-2">
            <SurveyCard name="this"/>
            <SurveyCard name="test"/>
            <SurveyCard name="test"/>
            <SurveyCard name="test"/>
            <SurveyCard name="test"/>
        </div>
    );
}

export default SurveyList;