import SurveyCard from "../components/SurveyCard";

const SurveyList = ()=>{
    return (
        <div className="min-h-screen grid content-center justify-items-center">
            <p className="m-4 mt-6 text-2xl font-bold">Browse surveys and take some of them</p>
            <div className="w-4/5 my-5 mx-auto grid grid-cols-2">
                <SurveyCard name="this"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="this"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="this"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
                <SurveyCard name="test"/>
            </div>
        </div>
    );
}

export default SurveyList;