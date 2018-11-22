const axios = require('axios');


const getWeather = async (lat, lng) => {

    
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5c1d2f5003759193012ac3c931ae0450`);


    return resp.data.main.temp;

    /*
    if(resp.data.status==='ZERO_RESULTS'){
        throw new Error(`Theres is no results for city/address: ${address}`);
    }

    let results = resp.data.results[0];
    let formatted_address = results.formatted_address;
    results = resp.data.results[0].geometry;
    
    return {
        location: formatted_address,
        lat: results.location.lat,
        lng: results.location.lng
    }

    */

}

module.exports = {
    getWeather
}