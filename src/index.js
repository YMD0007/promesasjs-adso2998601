// funcion con async 

function decargarArchivo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("archivo descargado");
        }, 1000);
    });
}



async function ejecutar() {

try {
    console.log("⌛⌛descarga en progreso")
    const response = await decargarArchivo();
    console.log(response);
}catch (error) {
    console.error("error", error);
    
}
}


