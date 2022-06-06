import React, { useState, useEffect } from 'react'
import * as API from '../Services/launches.js'
import LaunchCard from './LaunchCard.jsx';


export default function LaunchList(){

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(data => setLaunches(data));
    }, []) 

    return(
        <>
            <h1>Space X Missions</h1>
            <ul>
                {launches.map(launch => (
                <LaunchCard 
                key={launch.id}
                {...launch}
                />
                ))}
            </ul>  
        
        </>
    )
}