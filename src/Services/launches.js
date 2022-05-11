const API_URL = "https://api.spacexdata.com/v4"


export async function getAllLaunches() {
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}


export async function getLaunchByIdLaunch(idLaunch) {
    try {
        const response = await fetch(`${API_URL}/launches/${idLaunch}`)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}