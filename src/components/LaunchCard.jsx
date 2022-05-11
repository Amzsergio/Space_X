import s from '../styles/App.module.css'

export default function LaunchCard(launch) {
    
    return(
        <li id={s.liBox}>
        <span id={s.cardInfo}>
            {`Mission: ${launch.name}`} 
            <br />
            {launch.date_local.split('-')[0]}
            
            <button> More Details</button>
        </span>
        <button className={launch.success? s.success : s.failure}> {launch.success? "success" : "failure"}</button> 
      </li>
    )
}