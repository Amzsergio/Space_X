import logo from '../assets/logo2.png';
import React from 'react';
import LaunchList from './LaunchList.jsx';
import { Routes, Route } from 'react-router-dom'
import LaunchDetails from './LaunchDetails';


export default function App() {


  return (
    <React.Fragment>
      <img src={logo} alt="space X logo" />
      <Routes>
        <Route path='/' element={<LaunchList/>}/>
        <Route path='/launch/:launchId' element={<LaunchDetails/>} />
      </Routes>
    </React.Fragment>
  )
}
