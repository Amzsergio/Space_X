import logo from '../assets/logo2.png'
import React, { useState, useEffect } from 'react'
import * as API from '../Services/launches.js'
import LaunchCard from './LaunchCard';

export default function App() {

  const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(data => setLaunches(data));
    }, []) 
    console.log(launches)

  return (
    <React.Fragment>
      <img src={logo} alt="space X logo" />
      <h1>Space X Missions</h1>
      <ul>
        {launches.map(launch => (
          <LaunchCard 
          key={launch.flight_number}
          {...launch}
          />
        ))}
      </ul>
    </React.Fragment>
  )
}
