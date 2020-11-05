import React,{useContext} from 'react';
import { Consumer } from '../../Context';
import {PlaceContext} from '../../Context';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    zIndex: 10
  }

const Modal = item => {

    const { openModal,closeModal,isOpen,modalData } = useContext(PlaceContext);
    if(isOpen)
    {console.log("true")
    console.log(modalData)
    }
    if(!openModal) {return null;}
    else
    {
    return (
        <div className="modal-overlay fixed h-screen w-screen flex items-center top-0  justify-center ">

        <div className=" h-3/5 max-h-3/4 w-auto bg-black rounded  cursor-pointer ">
        <div className=" bg-gray-400 w-full flex justify-between p-3 shadow-xl text-gray-900">
            <p>Photo by : {modalData.user}</p>
            <button onClick={closeModal}>close</button>
            </div>
            <img src={modalData.webformatURL} alt="image too large"/>
                <p className="text-gray-800 bg-gray-400 w-full p-1">Image URL : {modalData.pageURL}</p>
        </div>
        </div>

    );}
};

export default Modal;