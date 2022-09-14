import React from 'react';
import { Link } from 'react-router-dom';
const PlaceName = place => {

    return (
        <div>
             <Link to={{ 
                          pathname: "/details",
                          myCustomProps: place
                      }} > 
            <div className="max-w-sm rounded overflow-hidden shadow-md w-72 h-84 lg:w-auto lg:h-full hover:shadow-lg">
                <img src={place.place.img} alt="" className="w-full h-56 rounded"/>
                <div className="px-6 py-4">
                    <div className="text-red-400  mb-2 text-xl">
                        {place.place.title}
                    </div>
                    <div className="px-0 py-4">
    
                        <span className="inline-block bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700 mr-2 mx-0 my-1">
                        #{place.place.attraction}
                        </span>
                        
                        <span className="inline-block bg-gray-200 rounded-full py-1 px-4 text-sm font-semibold text-gray-700 mr-2 mx-0 my-1">
                        #{place.place.type}
                        </span>
                    </div>
                </div>

            </div>
            </Link>
        </div>
    );
};

export default PlaceName;