//funcion para simular la descarga de un archivo, utilizando promesas

function descascargarARchivo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("📁📁Archivo descargado exitosamente📁📁");
        }, 5000);
    });
}

descascargarARchivo().then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});

