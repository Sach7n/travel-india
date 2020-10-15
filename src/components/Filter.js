import React,{useContext, useState} from 'react';
import {PlaceContext} from '../Context';
import { places } from '../data';


const Filter = () => {

    const { place } = useContext(PlaceContext);
    const { handleChange,submitForm,clearFilter } = useContext(PlaceContext);
 
    const newPlace = [...new Map(place.map(np => [np.attraction, np])).values()]
    const newType = [...new Map(place.map(np => [np.type, np])).values()]

    return (
        <>
        <p className="text-3xl m-10 ml-32"> Select where you would like to go.. </p>
        <form className="flex m-10 ml-24" key="form" >
        <div className="mx-10 text-gray-500 text-xs font-medium tracking-wide uppercase">
        <p className="mb-2">   Attraction </p>
        {
        newPlace.map((item,index)=>
        
                    <div className="mb-1" key={index}>
                    <input
                      type="radio"
                      name='attraction'
                      value={item.attraction}
                      defaultChecked={false}
                      onChange={handleChange}
                    />
                    <label className=" items-center text-gray-700" >
                    <span className="ml-2 capitalize">{item.attraction}</span>
                    </label>               
                    </div>            
        )}
        </div>
        <div className=" mb-2 mx-10 text-gray-500 text-xs font-medium tracking-wide uppercase">
        <p className="mb-2">Type</p>
        {
        newType.map((item,index)=>
        
                    <div className="mb-1" key={index}>
                    <label className=" items-center text-gray-700" >
                    <input
                      type="radio"
                      name='type'
                      value={item.type}
                      defaultChecked={false}
                      onChange={handleChange}
                    />
                    <span className="ml-2 capitalize">{item.type}</span>
                    
                    </label>
                    </div>            

        )}
        </div>        
        </form>
        <input className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-5 ml-32" 
               type="submit" 
               value="Submit"
               onClick={submitForm}
                />
        <input className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-5 ml-32" 
               type="submit" 
               value="Clear Filter"
               onClick={clearFilter}
                />
</>
    );
};

export default Filter;