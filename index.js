const os = require('os');
//const server= require('server');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ',os.freemem(), ' bytes de memoria lliure');//retorna memeoria lliure en bytes
console.log('Total mem: ',os.totalmem(), ' bytes de memoria total');
console.log('Memoria usada: ', os.totalmem() - os.freemem(), 'bytes de memoria usats');

