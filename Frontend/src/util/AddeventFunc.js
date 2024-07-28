import config from 'config'

const addeventCode = async (event) => {
    const response = await fetch(config.apiBaseUrl+"/events/addEvent",{
        method: 'POST',
        body: event
    })
    const data = await response.json();
    console.log(data);
    return data
}

export default addeventCode;