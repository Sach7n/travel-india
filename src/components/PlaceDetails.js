import React,{useState,useEffect} from 'react';
import {detailPlace} from '../data'
import { withRouter } from "react-router";

const PlaceDetails = props => {

    const Item = props.location.myCustomProps;
    // const [activeTab, setactiveTab]=useState()

    // const handleChange =()=>{

    // }
    
    // const list =Item.map((item) => 
    // <li onClick={() => setTab(item.id)} className={tab === item.id ? "text-red-400" : "text-red-300"}>
    //     {item.title}
    // </li>)

    // const Content = Item.map((item) => 
    // <p style={tab === item.id ? {} : {display: 'none'}}>{item.desc}</p>
    // )

    
    return (
        <>
        <div>
            {Item ? (
            <div>
            <div key="index" className='text-red-400  my-2 mx-16 text-4xl'>{Item.place.title}</div>
            
            <div className='mx-16 my-5'>
            
            
            <div className='flex'>
            
            <img src={Item.place.img}  className="w-64 h-64 rounded"/>
            <div key="index" className='text-red-500 ml-10 text-lg flex-col'>
                <p>Best time to visit : {Item.place.best_time}</p>
                <p>Nearest Airport : {Item.place.near_airport}</p>
            </div>
            
            
            
            </div>
            <div key="index" className='text-red-500 text-lg mt-6 '><p>{Item.place.desc}</p></div>
            </div>
            
            </div>
            ):(
            <h1>Render random destinations</h1>
            )}
            
    
        </div>
        </>
    );
};

export default withRouter(PlaceDetails);;