import Modal from 'react-modal';


/**
 * This modal shows the result list of the survey taken by a user
 * @param {*} props: results are the list of results of the same taken survey
 * @returns 
 */
const ResultModal = (props)=>{

    return (
        <Modal
            isOpen={props.isOpen} 
            onRequestClose={props.onRequestClose}
            contentLabel="Survey results"
            className="sm:w-3/4 w-[95%] mx-auto p-4 absolute sm:inset-12 inset-2 bg-white rounded-2xl 
            grid overflow-auto"
            overlayClassName="fixed inset-0 bg-black/60 sm:backdrop-blur-sm">

            <p className="w-full m-2 mx-auto font-bold sm:text-3xl text-xl text-center">
                See how others answered on this survey
            </p>

            <div className='w-full text-center'>{
                props.results.map((result, index) => (

                    <div key={index}
                        className="w-full m-3 mx-auto p-2 bg-sky-50 hover:bg-azure-100 
                        inline-flex flex-col items-start rounded-3xl border-2 
                        border-baby-blue/30 hover:border-azure/30
                        transition-all">{

                        result.answers.map((item, key)=>(
                            <div key={key} className="inline-flex flex-row items-center">
                                <p className="sm:mx-2 mx-1 mt-1 font-semibold sm:text-xl text-md text-left">
                                    {item.statement}
                                </p>
                                <p className="sm:px-8 px-4 pt-1 pb-2 sm:rounded-2xl rounded-xl sm:m-5 m-3 
                                transition-all font-bold sm:text-xl text-md text-white shadow-lg
                                shadow-baby-blue/50 hover:shadow-azure/40 bg-baby-blue hover:bg-azure">
                                    {`${item.answer? "Yes" : "No" }`}
                                </p>
                            </div>
                        ))

                    }</div>
                ))

            }</div>

            <button
                onClick={props.onRequestClose}

                className="sm:w-1/3 w-4/5 sm:m-4 max-h-16 m-3 sm:mx-auto mx-auto bg-baby-blue px-10 py-4 rounded-2xl 
                hover:bg-azure transition-all font-bold text-xl text-white  text-center
                shadow-lg shadow-baby-blue/50 hover:shadow-azure/40">

                Validate
            </button>

        </Modal>
    )
}

export default ResultModal