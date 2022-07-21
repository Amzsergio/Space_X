import React from "react"
import { Link } from 'react-router-dom'
import s from '../NavBar/NavBar.module.css'

export default function NavBar(){

    return(
        <React.Fragment>
            <div id={s.navContainer}>
                
          
                    <Link id={s.homeBtn} to='/'>Home</Link>
         
    
                
                    <Link id={s.launchesBtn} to='/launchList'>Launches</Link>
                
            </div>
        </React.Fragment>
    )
}