import { useParams } from 'react-router-dom';
import{ useState, useEffect} from 'react';
import * as API from '../Services/launches.js'

export default function LaunchDetails(){

    const [launch, setLaunch] = useState();
    
    const {launchId} = useParams();

    useEffect(() => {
        API.getLaunchByIdLaunch(launchId).then(data => setLaunch(data))
    }, [launchId])


    return(
        <h1> My id is: {launchId} </h1>
    )
}