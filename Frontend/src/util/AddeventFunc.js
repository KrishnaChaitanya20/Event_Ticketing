const addeventCode = async (event) => {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL+"/events/addEvent",{
        method: 'POST',
        body: event
    })
    const data = await response.json();
    console.log(data);
    return data
}

export default addeventCode;