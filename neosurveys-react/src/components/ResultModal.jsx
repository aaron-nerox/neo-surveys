import Modal from 'react-modal';

const ResultModal = (props)=>{

    return (
        <Modal
            isOpen={props.isOpen} 
            onRequestClose={props.onRequestClose}
            contentLabel="Survey results"
            className="w-3/4 mx-auto p-4 absolute inset-12 bg-white rounded-2xl 
            grid overflow-auto"
            overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm">

            <p className="w-full m-2 font-bold text-3xl text-center">
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
                                <p className="mx-2 mt-1 font-semibold text-xl">
                                    {item.statement}
                                </p>
                                <p className="px-8 pt-1 pb-2 rounded-2xl m-5 
                                transition-all font-bold text-xl text-white shadow-lg 
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

                className="w-1/3 max-h-16 mx-auto bg-baby-blue px-10 py-4 rounded-2xl m-5 mb-10
                hover:bg-azure transition-all font-bold text-xl text-white 
                shadow-lg shadow-baby-blue/50 hover:shadow-azure/40">

                Validate
            </button>

        </Modal>
    )
}

export default ResultModal