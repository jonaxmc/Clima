const axios = require('axios')
const getclima = async(lat, lon) => {
    const resp = await axios.get("api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon);
    return resp.data.main.temp;
}

module.exports = {
    getclima
}