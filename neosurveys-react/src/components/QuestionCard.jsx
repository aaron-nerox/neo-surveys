
const QuestionCard = (props)=>{
    return(
        <div className="w-4/5 min-h-[100px] m-3 p-2 bg-sky-50 hover:bg-azure-100 
            inline-flex flex-col items-center rounded-3xl border-2 
            border-baby-blue/30 hover:border-azure/30
            transition-all">

            <p className="m-3 text-lg font-bold">
                {props.statement}
            </p>

            <div>
                <button 
                    className="bg-baby-blue px-8 pt-1 pb-2 rounded-2xl m-5
                    hover:bg-azure transition-all font-bold text-xl text-white 
                    shadow-lg shadow-baby-blue/50 hover:shadow-azure/40">
                    Yes
                </button>

                <button 
                    className="bg-baby-blue px-8 pt-1 pb-2 rounded-2xl m-5
                    hover:bg-azure transition-all font-bold text-xl text-white 
                    shadow-lg shadow-baby-blue/50 hover:shadow-azure/40">
                    No
                </button>
            </div>
        </div>
    )
}

export default QuestionCard;