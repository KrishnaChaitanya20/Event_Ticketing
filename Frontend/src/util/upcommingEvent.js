const  upcomming = async () => {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL+"/events/upcomming",{
        method: 'GET'
    })
    const data = await response.json();
    console.log(data);
    return data.status
}