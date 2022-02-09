import logo from "../assets/icons/main_logo.png";


const SurveyCard = (props)=>{
    return(
        <div className="m-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-row 
            items-start rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
            transition-all"
            onClick={props.onClick}>

            <img className="w-[80px]" src={logo} alt="survey_icon" />
            <p className="mx-2 mt-1 font-semibold text-xl">{props.name}</p>

        </div>
    )
}

export default SurveyCard;