import React,{useState} from 'react';
import { withRouter } from "react-router";
import Overview from "./tabs_content/Overview"
import MorePhotos from "./tabs_content/MorePhotos"
import MoreDetails from "./tabs_content/MoreDetails"
import Featured from "./Featured"

const PlaceDetails = props => {

    const Item = props.location.myCustomProps;
    const TABS = {
        'overview': <Overview details={Item}/>,
        'more_details': <MoreDetails mdetails={Item}/>,
        'more_photos': <MorePhotos image={Item}/>
      }
      const [selectedTab, setSelectedTab] = useState('overview');
    return (
        <>
            
            {Item ? (   
            <div>
            <div key="index" className='text-red-400 my-2 mx-5 text-2xl lg:mx-16 lg:text-4xl'>{Item.place.title}</div>
            
            <div className="flex justify-around text-lg cursor-pointer w-11/12 m-auto h-12 bg-gray-200 text-red-600">
            <button  className="w-1/3 hover:bg-gray-300 focus:bg-gray-400" onClick={() => setSelectedTab('overview')}><p>Overview</p></button>
    
            <button className="w-1/3 hover:bg-gray-300 focus:bg-gray-400" onClick={() => setSelectedTab('more_details')}><p>More Details</p></button>
            <button className="w-1/3 hover:bg-gray-300 focus:bg-gray-400" onClick={() => setSelectedTab('more_photos')}><p>More Photos</p></button>
            </div>
         
            <div className="tab_content">
                {TABS[selectedTab]}
            </div>
            </div>
            ):(
            <Featured />
            )}
        </>
    );
};

export default withRouter(PlaceDetails);;