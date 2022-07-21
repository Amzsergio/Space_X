import React from 'react';
import InfoApp from '../InfoApp/InfoApp.jsx'
import { Routes, Route } from 'react-router-dom';
import LaunchDetails from '../LaunchDetails.jsx';
import LaunchList from '../LaunchList/LaunchList.jsx';
import NavBar from '../NavBar/NavBar.jsx';



export default function App() {


  return (
    <React.Fragment> 
      <Routes>
        <Route path='/' element={<InfoApp/>} />
        <Route path='/launchList' element={<LaunchList/>} />
        <Route path='/launch/:launchId' element={<LaunchDetails/>} />
      </Routes>
      <NavBar/>
    </React.Fragment>
  )
}
