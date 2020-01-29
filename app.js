//Hace un llamado a las librerias y métodos 
const axios = require('axios'); //Llama la librería axios
const clima = require('./controlador/clima'); //Función para obtener el clima
const ubicacion = require('./controlador/ubicacion'); //Función para obtener las coordenadas

//Método para obtener la ciudad desde la consola
const argv = require('yargs').options({
    nombre: {
        alias: "n", //Crea un alias para la ciudad
        desc: "nombre ciudad para obtener clima",
        demand: true
    }

}).argv;

//Método para obtener el clima de una ciudad determinada
const getInfo = async(ciudad) => {
    try {
        const coors = await ubicacion.getCiudadLatLon(ciudad); //Guarda en una constante la Latitud y Longitud de la ciudad
        const temp = await clima.getClima(coors.lat, coors.lon); //Guarda en una constante el valor del clima de la ciudad de acuerdo a su latitud y longitud
        return ` El clima en ${coors.name} es de ${temp} °C`; //Imprime la temperatura de la ciudad

    } catch (error) {
        return ` No se pudo determinar el clima en ${ciudad}`; //Si existe un error, se mostrará el mensaje.
    }

}

getInfo(argv.nombre)
    .then(console.log)
    .catch(console.log);