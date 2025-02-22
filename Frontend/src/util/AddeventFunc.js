import config from 'config';

const addeventCode = async (event) => {
    try {
        const response = await fetch(config.apiBaseUrl + "/events/addEvent", {
            method: 'POST',
            body: event
        });

        if (!response.ok) { 
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error occurred while adding event:", error);
        throw error;
    }
}

export default addeventCode;
