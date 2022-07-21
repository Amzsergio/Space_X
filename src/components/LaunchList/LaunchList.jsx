import React, { useState, useEffect } from 'react'
import * as API from '../../Services/launches.js'
import LaunchCard from '../Card/LaunchCard.jsx';
import s from "../LaunchList/LaunchList.module.css"


export default function LaunchList(){

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(data => setLaunches(data));
    }, []) 


    return(
        <>
            
            <div id={s.cardsList}>
                {launches.map(launch => (
                <LaunchCard 
                key={launch.id}
                {...launch}
                />
                ))}
            </div>  

        
        </>
    )
}