import React from 'react';
import LaunchList from '../LaunchList/LaunchList';
import { Routes, Route } from 'react-router-dom'
import LaunchDetails from '../LaunchDetails';



export default function App() {


  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LaunchList/>}/>
        <Route path='/launch/:launchId' element={<LaunchDetails/>} />
      </Routes>
    </React.Fragment>
  )
}
