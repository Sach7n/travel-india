import React,{useEffect, useState,useContext} from 'react';
import Modal from './Modal';
import {PlaceContext} from '../../Context';
import loadinggif from './loading.gif';

const MorePhotos = props => {
    
    let item =props.image.place1;
    
    const [image,setImage]=useState("")
    const [loading,setLoading]=useState(true)
    const { openModal,isOpen } = useContext(PlaceContext);



    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${item.title}&image_type=photo`)
        .then(res => res.json())
        .then(data => {
          setImage(data.hits)
          setLoading(false);
        })
        .catch(err => console.log(err));
    }, [item]);

    
    return (
<>
{loading ?  <img className="lg:ml-12 flex items-center justify-center h-screen" src={loadinggif} alt="loading"/> :
<div>
<div className="mx-4 mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4  lg:mx-16 lg:my-5">
          
    {image && image.map(items => (
        <div key={items.id} className="h-full  hover:shadow-lg" onClick={()=>openModal(items)} > 
            
          <img  className=" w-full h-56 rounded" src={items.webformatURL} alt="" />
          </div>
      ))}    
        </div>
     {isOpen ?<Modal/>:null}
        </div>
}
   </>
    );
};

export default MorePhotos;