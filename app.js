const logic = require('./logic/logic');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Address of the city you want to know the weather.',
        demand: true
    }
}).argv;



let getInfo = async(address) => {

    try {
        let coords = await logic.getLocationLatLng(address);
        let temp = await weather.getWeather(coords.lat,coords.lng);

        return `The temperature in ${address} is ${temp} C° `;
        
    } catch (error) {
        return `Unable to find weather on ${address} `;
    }

    
}


getInfo(argv.address)
    .then( msg => console.log(msg))
    .catch( err => console.log(e));