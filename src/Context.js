import React,{useState,useEffect} from 'react';
import {places} from './data';
import useFirestore from '../src/components/hooks/useFirestore';

export const PlaceContext = React.createContext();
export const { Consumer } = PlaceContext;
const Context = props => {
    const { tempDoc } = useFirestore('travApp');
    const [place,setPlace]=useState(tempDoc);
    console.log(tempDoc)

    const [isOpen, setisOpen]=useState(false)
    const [modalData, setmodalData]=useState()

    const [formData,setformData]= useState({
      attraction : "",
      type : ""
    })    

    var second = {tempDoc,formData,place}
    useEffect(()=>{
      console.log("fired")
      const fetchItems= async ()=>{
        setPlace(tempDoc)
      }
      fetchItems()
    },[second])

    let featuredPlaces = places.filter(place1 => place1.featured === true);
    let randomRoom = featuredPlaces[~~(Math.random() * featuredPlaces.length)]
    
    const handleChange = event => {
      const target = event.target;
        const value = target.value;
        const name = target.name; 
        setformData({
          ...formData,
          [name]:value
        })};
    
    const submitForm =event=>{
      event.preventDefault();
      let tempPlace = [...place];
      if(formData.attraction)
      {tempPlace = tempPlace.filter(place =>place.attraction === formData.attraction);}
      if(formData.type)
      {tempPlace = tempPlace.filter(place =>place.type === formData.type);}
      if(formData.attraction==="" && formData.type==="")
      {console.log("no place found")}
      setPlace(tempPlace)      
    }
    
    const clearFilter =()=>{
      console.log("called")
      setformData({
        attraction : "",
        type : ""
      })
      document.getElementById("course-form").reset();
    }

    const openModal = items => {
      setisOpen(true);
      setmodalData(items)
    };
    const closeModal = () => {
      setisOpen(false);
    };
    
    const providerValues = {
        place,
        clearFilter,
        handleChange,
        submitForm,
        formData,
        openModal,
        closeModal,
        isOpen,setisOpen,
        modalData,
        randomRoom
      };
    
    return (
        <PlaceContext.Provider value={providerValues}>
        {props.children}
      </PlaceContext.Provider>
    );
};

export default Context;
