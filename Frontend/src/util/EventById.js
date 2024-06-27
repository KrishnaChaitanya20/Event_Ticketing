const geteventbyid = async (id) => {
    try{
        const response = await fetch(process.env.REACT_APP_API_BASE_URL+"/events/find/"+id,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        return data
    }
    catch(err){
        console.log(err)
    }
}

export default geteventbyid;