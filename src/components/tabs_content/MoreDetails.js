import React from 'react';

const MoreDetails = props => {

    let item =props.mdetails.place;
    const tags = item.Destination.split(',');
    
    return (
        <div>
            <div className='text-red-600 text-base font-bold flex justify-around m-4 mt-4 lg:ml-10 mt-0 lg:text-3xl'>
                
                <div>Destinations <br/>
                    {tags.map((tag, index) => (
                        <div key={index} className="flex-col text-sm mt-2 font-semibold text-red-500 lg:text-2xl">
                        {tag}<br/>
                        </div>
                    ))}
                </div>
                
                <div >Average temprature <br/>
                    <p className="flex-col text-sm mt-2 font-semibold text-red-500 lg:text-2xl">{item.temprature}</p>
                 </div>

                
            </div>
        </div>
    );
};

export default MoreDetails;