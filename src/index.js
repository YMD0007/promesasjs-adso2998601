// // funcion con async 

function descargarArchivo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promesa ejecutada con exito despues de 8 segundos 👻😊");
        }, 8000);
    });
}
descargarArchivo()
.then((response) => {
    console.log(response);
})


// async function ejecutar() {

// try {
//     console.log("⌛⌛descarga en progreso")
//     const response = await decargarArchivo();
//     console.log(response);
// }catch (error) {
//     console.error("error", error);
    
// }
// }






