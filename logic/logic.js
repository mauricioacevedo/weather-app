const axios = require('axios');



const getLocationLatLng = async(address) => {

    let encodedUrl = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyB3flmbINSf__9SaiyMMASQOzdvYh1fOKc`);

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
}

module.exports = {
    getLocationLatLng
}