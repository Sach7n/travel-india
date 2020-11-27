import React from 'react';

const Overview = props => {

    let item =props.details.place;

    return (
        <div>
            <div className='mx-4 my-3 lg:mx-16 lg:my-5'>          
            <div className='flex flex-col md:flex-row'>
            <img src={item.img} alt="failed to load"  className="w-full lg:w-64 h-64 rounded"/>
            <div className='text-red-500 text-lg flex-col m--4 mt-3 lg:ml-10 mt-0 '>
                <p>Best time to visit : {item.best_time}</p>
                <p>Nearest Airport : {item.near_airport}</p>
            </div>
            
            
            
            </div>
            <div className='text-red-500 text-lg mt-3 lg:mt-6 '><p>{item.desc}</p></div>
            </div>
        </div>
    );
};

export default Overview;