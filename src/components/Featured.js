import React,{useContext} from 'react';
import {PlaceContext} from '../Context';


const Featured = props => {

    const { randomRoom } = useContext(PlaceContext);
    return (
        <div>
                
            <div className='mx-4 my-3 lg:mx-16 lg:my-5'>          
            <div  className='text-red-400 my-2  text-2xl lg:text-4xl'>{randomRoom.title}</div>
            <div className='flex flex-col md:flex-row'>
            <img src={randomRoom.img} alt="failed to load" className="w-full lg:w-64 h-64 rounded"/>
            
            <div  className='text-red-500 text-lg flex-col m--4 mt-3 lg:ml-10 mt-0 '>
                <p>Best time to visit : {randomRoom.best_time}</p>
                <p>Nearest Airport : {randomRoom.near_airport}</p>
            </div>
            </div>

            <div className='text-red-500 text-lg mt-3 lg:mt-6 '><p>{randomRoom.desc}</p></div>
            </div>
         </div>
    );
};

export default Featured;