import React, { useState, useEffect } from 'react'
import * as API from './Services/launches.js'


export default function App() {

  const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAllLaunches().then(data => setLaunches(data));
    }, [])

    

  return (
    <React.Fragment>
      Hello
    </React.Fragment>
  )
}
