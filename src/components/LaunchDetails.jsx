import{ useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../Services/launches.js'

export default function LaunchDetails(){

    const [ launch, setLaunch] = useState({}); 

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByIdLaunch(launchId).then(res => setLaunch(res));
    }, [ launchId ]  ) 

    const getLocalDate = (date) => {
        let launchDate = new Date(date).toString().split(' ').slice(0, 4)
        return launchDate.join(' ')
    }

    const getLocalHour = (date) => {
        let launchDate = new Date(date).toString().split(' ').slice(4, 9)
        return launchDate.join(' ')
    }

    console.log(launch)
    return (

        <>
            <div id='launchDetails_container'>

                <div className='title_container'>                
                    <h3> Missionn Name:</h3> 
                    <h1>{launch.name}</h1>
                </div>
                <div className='launch_info'>
                    <ul>
                        <li>
                            Flight Number: {launch.flight_number}
                        </li>
                        <li>
                            Mission Status: {launch.success ? (<p> Success</p>): (<p>Failure</p>)}
                        </li>
                        <li>
                            Launch Local Date: {getLocalDate(launch.date_local)}
                        </li>
                        <li>
                            Launch Local Hour: {getLocalHour(launch.date_local)}
                        </li>
                    </ul>
                    
                </div>
                <div className='media_container'>
                    <div className='links_container'>
                        
                    </div>
                    <div className='media_container'>

                    </div>
                </div>    
            </div>
        </>
    )
}