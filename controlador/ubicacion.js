const axios = require('axios');

//Método para obtener la longitud y latitud
const getCiudadLatLon = async(nombre) => {
    const ciudad = encodeURI(nombre); //Obtiene la ciudad recibida por la consola

    //Crea una instancia a la API para obtener la ubicación
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '8ac05538ebmsh1d8d2bb9ae49d50p1737a9jsn3064fa337c89' }

    });

    const resp = await instance.get();
    if (resp.data.Results.length == 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0]; //Obtiene parámetros cómo el país, la región, longitud y latitud
    const name = data.name; //Guarda en una variable la ciudad y el país
    const lat = data.lat; //Guarda en una variable la latitud de la ciudad
    const lon = data.lon; //Guarda en una variable la longitud de la ciudad

    //Retorna las variables necesarias
    return {
        name,
        lat,
        lon
    }

}

//Exporta los métodos a utilizarse
module.exports = {
    getCiudadLatLon
}