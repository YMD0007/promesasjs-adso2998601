


// function promise () {
//     return new Promise((resolve, reject) => {
//         let error = false;
//         if (error) {
//             resolve('todo en orden');
//         } else {
//             reject('algo paso con la promesa');
//         }
//     });
// };

// promise()
//     .then(mensaje => console.log(mensaje))
//     .catch(error => console.log(error));



//crear una promesa que se rechace depues de 3 segundos si un numero aleatorio es menor a 0.5, si no que se resuelva
let numero = Math.random();
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (numero < 0.5) {
            resolve('error numero menor');
        } else {
            reject('el numero es mayor');
        }
    }, 1000);
});

promesa
    .then(mensaje => {console.log(mensaje, numero)})
    .catch(error => {console.log(error, numero);});