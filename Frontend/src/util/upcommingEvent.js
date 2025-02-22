import config from 'config'

const  upcomming = async () => {
    const response = await fetch(config.apiBaseUrl+"/events/upcomming",{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json();
    // console.log(data);
    return data
}

export default upcomming;