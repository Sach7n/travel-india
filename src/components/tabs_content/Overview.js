import React from 'react';

const Overview = props => {

    let item =props.details.place;

    return (
        <div>
            <div className='mx-16 my-5'>          
            <div className='flex'>
            <img src={item.img}  className="w-64 h-64 rounded"/>
            <div key="index" className='text-red-500 ml-10 text-lg flex-col'>
                <p>Best time to visit : {item.best_time}</p>
                <p>Nearest Airport : {item.near_airport}</p>
            </div>
            
            
            
            </div>
            <div key="index" className='text-red-500 text-lg mt-6 '><p>{item.desc}</p></div>
            </div>
        </div>
    );
};

export default Overview;