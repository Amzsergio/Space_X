import React, { useState, useEffect } from 'react'
import * as API from '../../Services/launches.js'
import LaunchCard from '../Card/LaunchCard.jsx';
import s from "../LaunchList/LaunchList.module.css"


export default function LaunchList(){

    const [launches, setLaunches] = useState([]);
    const [appInfo, setAppInfo] = useState(false)

    useEffect(() => {
      API.getAllLaunches().then(data => setLaunches(data));
    }, []) 

    const handleOnClick = () => {
        setAppInfo(!appInfo)
    }

    return(
        <>
            {
                appInfo ? (
                    <div 
                        className={`${s.logoTitle} ${s.activeDescription}`}
                        onClick={() => handleOnClick()}
                    >
                      
                            <p>
                                I'm passionate about space and the universe, that's why I have Built this Single Web Page App (SPA) and whether you share this passion in the same way or you have a huge and saint curiosity, I hope you to enjoy it. 
                                <br />
                                I've used <a href="https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs" target='_blank'> this amazing Api </a> to set all the information related with the space X missions into a serie of "Mission cards". You'll be able to delve into high quality information about Space x Missions through relevant links, videos, pictures and more. 
                                <br />
                                <b>Comming soon:</b> A section where you'll be able to save your favorite missions. 
                            </p>
                            
                    </div>
                    
                ): (
                    <div className={s.logoTitle}>
                        <h1> Space X <br /> Missions </h1>
                        <button
                            onClick={() => handleOnClick()}
                        >About This App</button>
                </div>
                )
            }
            
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