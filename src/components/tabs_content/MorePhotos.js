import React,{useEffect, useState,useContext} from 'react';
import { Consumer } from '../../Context';
import Modal from './Modal';
import {PlaceContext} from '../../Context';


const MorePhotos = props => {
    
    let item =props.image.place;
    
    const [image,setImage]=useState("")
    const [itemData, setitemData]=useState()
    const { openModal,closeModal,isOpen } = useContext(PlaceContext);



    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${item.title}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
          setImage(data.hits)
        })
        .catch(err => console.log(err));
    }, [item]);

    
    return (
<>
<div>
<div className="grid grid-cols-4 gap-8 mx-16 my-5">
            
    {image && image.map(items => (
        <div key={items.id} className="h-full hover:shadow-lg" onClick={()=>openModal(items)} > 
            
          <img  className=" w-full h-56 rounded" src={items.webformatURL} alt="" />
          </div>
      ))}    
        </div>
     {isOpen ?<Modal/>:null}
        </div>
   </>
    );
};

export default MorePhotos;