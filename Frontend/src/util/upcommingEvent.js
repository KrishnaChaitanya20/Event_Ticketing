import config from 'config'

const  upcomming = async () => {
    const response = await fetch(config.apiBaseUrl+"/events/upcomming",{
        method: 'GET'
    })
    const data = await response.json();
    // console.log(data);
    return data
}

export default upcomming;