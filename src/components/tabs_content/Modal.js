import React,{useContext} from 'react';
import {PlaceContext} from '../../Context';


const Modal = item => {

    const { openModal,closeModal,isOpen,modalData } = useContext(PlaceContext);
    if(isOpen)
    
    if(!openModal) {return null;}
    else
    {
    return (
        <div className="modal-overlay fixed h-screen w-screen flex items-center top-0  justify-center bg-gray-800 bg-opacity-75" onClick={closeModal}>

        <div className="rounded cursor-pointer border-4 rounded border-double border-red-800">
        <div className=" bg-gray-400 w-full flex justify-between p-3 shadow-xl bg-red-300">
            <p>Photo by : {modalData.user}</p>
            <button onClick={closeModal}>close</button>
            </div>
            <div className="h-auto max-h-96 w-auto max-w-96">
            <img src={modalData.webformatURL} alt="failed to load"/>
            </div>
                <p className="text-gray-800 bg-red-300 w-full p-1">Image URL : {modalData.pageURL}</p>
        
        </div>
        </div>

    );}
};

export default Modal;