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
      tempPlace = tempPlace.filter(place => place.attraction === formData.attraction || place.type === formData.type);
      setPlace(tempPlace)      
      console.log(tempPlace)
    }
    
    const clearFilter =()=>{
      setformData({
        attraction : "",
        type : ""
      })
    }
    
    const providerValues = {
        place,
        clearFilter,
        handleChange,
        submitForm
      };
    
    return (
        <PlaceContext.Provider value={providerValues}>
        {props.children}
      </PlaceContext.Provider>
    );
};

export default Context;