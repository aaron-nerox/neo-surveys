import { useState } from "react";

/**
 * A question card component displayed in the survey
 * @param {*} props statement is the question and onClick for input capture
 * @returns 
 */
const QuestionCard = (props)=>{
    const [isCardAnswered, setIsCardAnswered] = useState(false);
    const [answer, setAnswer] = useState("");
    let cardOpacity;

    if(isCardAnswered){
        cardOpacity = "opacity-50"
    }else{
        cardOpacity = "opacity-100"
    }

    return(
        <div className={`w-4/5 min-h-[100px] m-3 p-2 bg-sky-50 hover:bg-azure-100 
            inline-flex flex-col items-center rounded-3xl border-2 
            border-baby-blue/30 hover:border-azure/30
            transition-all ${cardOpacity}`}>

            <p className="m-3 text-lg font-bold">
                {props.statement}
            </p>

            <div>
                <button 
                    onClick={()=> {
                        props.onClick(true);
                        setIsCardAnswered(true);
                        setAnswer("yes");
                    }}
                    className={`px-8 pt-1 pb-2 
                    rounded-2xl m-5 hover:bg-azure transition-all font-bold text-xl 
                    text-white shadow-lg shadow-baby-blue/50 hover:shadow-azure/40
                    ${(!isCardAnswered || answer !== "yes")? "bg-baby-blue" : "bg-azure"}`}>

                    Yes
                </button>

                <button 
                    onClick={()=> {
                        props.onClick(false);
                        setIsCardAnswered(true);
                        setAnswer("no");
                    }}
                    className={`px-8 pt-1 pb-2 
                    rounded-2xl m-5 hover:bg-azure transition-all font-bold text-xl 
                    text-white shadow-lg shadow-baby-blue/50 hover:shadow-azure/40
                    ${(!isCardAnswered || answer !== "no")? "bg-baby-blue" : "bg-azure"}`}>
                    No
                </button>
            </div>
        </div>
    )
}

export default QuestionCard;