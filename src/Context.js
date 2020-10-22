import React,{useState,useEffect} from 'react';
import {places} from './data';

export const PlaceContext = React.createContext();
export const { Consumer } = PlaceContext;

const Context = props => {
   
    const [place,setPlace]=useState([]);

    const [formData,setformData]= useState({
      attraction : "",
      type : ""
    })    
    
    useEffect(()=>{
      console.log('useeffect called')
      const fetchItems=()=>{
        setPlace(places)
      }
      fetchItems()
    },[formData])

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
      setPlace(tempPlace)      
      console.log(tempPlace)
    }
    
    const clearFilter =()=>{
      setformData({
        attraction : "",
        type : ""
      })
      document.getElementById("course-form").reset();
    }
    
    const providerValues = {
        place,
        clearFilter,
        handleChange,
        submitForm,
        formData
      };
    
    return (
        <PlaceContext.Provider value={providerValues}>
        {props.children}
      </PlaceContext.Provider>
    );
};

export default Context;