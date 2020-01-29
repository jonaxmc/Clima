const axios = require('axios');

//Método para obtener la temperatura
const getClima = async(lat, lon) => { //El método recibe como parámetro la latitud y longitud
    //Obtiene la temperatura mediante la api del clima
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac7eaef281e24b3e15ae43d9c6ee567d&units=metric`);
    return resp.data.main.temp; //retorna la temperatura
}

//Exporta el método par obtener el clima
module.exports = {
    getClima
}