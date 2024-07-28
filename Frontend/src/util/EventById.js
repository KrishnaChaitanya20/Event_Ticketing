import config from 'config'

const geteventbyid = async (id) => {
    const response = await fetch(config.apiBaseUrl+"/events/find/"+id,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json();
    return data
   
}

export default geteventbyid;