import React,{useContext} from 'react';
import {PlaceContext} from '../Context';
import { places } from '../data';


const Filter = () => {

    const { handleChange,submitForm,clearFilter} = useContext(PlaceContext);
 
    const newPlace = [...new Map(places.map(np => [np.attraction, np])).values()]
    const newType = [...new Map(places.map(np => [np.type, np])).values()]

    return (
        <>
        <p className=" lg:text-3xl lg:m-10 lg:ml-32 text-2xl ml-6 m-6 "> Select where you would like to go.. </p>
        <form className="flex lg:m-10 lg:ml-32 sm:ml-4 m-2  " key="form" id='course-form'>
        <div className="mx-10 text-gray-500 text-xs font-medium tracking-wide uppercase sm:mx-2">
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
        <div className="flex lg:m-5 lg:ml-32 sm:ml-14 mx-12 m-4">
        <input className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded" 
               type="submit" 
               value="Submit"
               onClick={submitForm}
                />
        <input className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded mx-6" 
               type="submit" 
               value="Clear Filter"
               onClick={clearFilter}
                />
        </div>
</>
    );
};

export default Filter;