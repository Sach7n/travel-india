import React, { useContext, useEffect } from 'react';
import PlaceName from './PlaceName'
import { PlaceContext } from '../Context';
import Filter from './Filter';
import useFirestore from './hooks/useFirestore';
import { useState } from 'react';


const PlacesList = () => {

    //const { place } = useContext(PlaceContext);
    const {tempDoc} = useFirestore('travApp')
    console.log(tempDoc)
    return (
        <>
            <Filter />
            <div className="container">

                <p className="text-2xl mx-6 my-4 lg:ml-32 lg:text-3xl lg:my-10"> Places we can go </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-4 mx-2 my-2 lg:ml-32 lg:my-4">
                    {tempDoc && tempDoc.map((item, index) => <PlaceName key={index} place={item} />)}
                </div>
            </div>
        </>
    );
};

export default PlacesList;