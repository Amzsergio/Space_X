import s from '../Card/Card.module.css'
import { Link } from 'react-router-dom'

export default function LaunchCard(launch) {
    
    return(
        <li id={s.liBox}>
        <span id={s.cardInfo}>
            {`Mission: ${launch.name}`} 
            <br />
            {launch.date_local.split('-')[0]}
            <Link to={`/launch/${launch.id}`}>
                <button> More Details</button>
            </Link>
        </span>

        <button className={launch.success? s.success : s.failure}> {launch.success? "Success" : "Failure"}</button> 

      </li>
    )
}