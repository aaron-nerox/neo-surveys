import Modal from 'react-modal';
import icon from "../assets/icons/success_icon.png";

const SucessCard = (props) => {
    return(
        <Modal 
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            className="sm:w-1/4 w-[70%] h-min mx-auto my-auto p-4 
            absolute sm:inset-12 inset-2 bg-white rounded-2xl 
            grid overflow-auto"
            overlayClassName="fixed inset-0 bg-black/60 sm:backdrop-blur-sm">
        
        <img src={icon} alt="icon" className='w-1/2 mx-auto'/>
        <p className="m-3 font-semibold text-xl text-center">
            Survey created
        </p>
        <button 
            onClick={props.onRequestClose}
            className="bg-baby-blue px-10 pt-3 pb-4 rounded-2xl m-5
                hover:bg-azure transition-all font-bold text-xl text-white 
                shadow-lg shadow-baby-blue/50 hover:shadow-azure/40" >
            OK
        </button>


        </Modal>
    )
}

export default SucessCard;