import{ useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../Services/launches.js'

export default function LaunchDetails(){

    const [ launch, setLaunch] = useState({}); 

    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByIdLaunch(launchId).then(res => setLaunch(res));
    }, [ launchId ]  ) 

    console.log(launchId)

    return (

        <div>

        </div>
    )
}