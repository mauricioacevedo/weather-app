const axios = require('axios');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address of the city you want to know the weather.',
        demand: true
    }
}).argv;

console.log(argv.address);

let encodedUrl = encodeURI(argv.address);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyB3flmbINSf__9SaiyMMASQOzdvYh1fOKc`)
    .then(resp => {
        let results = resp.data.results[0];
        let formatted_address = results.formatted_address;
        results = resp.data.results[0].geometry;
        let lat = results.location.lat;
        let lng = results.location.lng;

        console.log('Formatted address: '+JSON.stringify(formatted_address,undefined,2));
        console.log('Latitude: '+JSON.stringify(lat,undefined,2));
        console.log('Longitude: '+JSON.stringify(lng,undefined,2));
    })
    .catch( e => console.log('ERROR!!!! ', e))