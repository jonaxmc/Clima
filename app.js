const axios = require('axios')
const clima = require('./controlador/clima')
const ubicacion = require('./controlador/ubicacion')
const argv = require('yargs').options({
    nombre: {
        alias: "n",
        desc: "nombre ciudad para obtener clima",
        demand: true
    }

}).argv;

let getInfo = async(nombre) => {
    try {
        let coors = await ubicacion.getCiudadLatLon(nombre)
        let temp = await clima.getClima(coors.lat, coors.lng);

        return ` El clima en ${coors.nombre} es de ${temp.temp}`

    } catch (error) {
        return ` No se pudo determinar el clima en ${coors.nombre}`;
    }

}

getInfo(argv.nombre)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err)
    })



// const ciudad = encodeURI(argv.nombre)
// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
//     headers: { "X-RapidAPI-Key": "ea164cc3admshce81769bb029b06p1d2f9ejsn57543c2faebd" }
// });

// instance.get()
//     .then(resp => {
//         console.log(resp.data.Results[0])
//     }).catch(err => {
//         console.log("ERROR:", err)
//     })