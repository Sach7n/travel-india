import React,{useContext} from 'react';
import PlaceName from './PlaceName'
import {PlaceContext} from '../Context';
import Filter from './Filter';

const PlacesList = () => {
    
    const { place } = useContext(PlaceContext);
    
        return (
        <>
        <Filter/>
        <div className="container mx-auto my-4">

        <p className="text-3xl ml-20"> Places we can go </p>

            <div className="grid grid-cols-4 gap-5">
        {place.map((item,index)=><PlaceName key={index} place={item}/>)}
            </div>
        </div>
        </>
    );
};

export default PlacesList;