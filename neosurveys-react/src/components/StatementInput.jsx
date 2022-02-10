
const StatementInput = (props)=>{

    return(
        <div className="w-full my-3 p-2 bg-sky-50 hover:bg-azure-100 inline-flex flex-col 
            items-start rounded-3xl border-2 border-baby-blue/30 hover:border-azure/30
            transition-all">
            <p className="mx-2 mt-1 font-semibold text-xl">
                What is your question?
            </p>
            <input type="text" 
                    className="m-4 p-4 h-13 w-3/5 rounded-xl outline-none"
                    name="question-input"
                    placeholder="Your question"
                    value={props.Statement}
                    onChange={props.onChange} />
        </div>
    );

}

export default StatementInput;