const fs = require('fs');//file sistem

// fs.writeFile('./texte.txt','linia u',function (err){// cream un archiu texte.txt dins el mateix directori amb el texte "linia u"
//     if(err){
//         console.log(err);
//     }
//     console.log('Archiu creat');
// });

// console.log('darrera linia de codi');

fs.readFile('./texte.txt', function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());//txte.toString()-> passa les dades a string per a poder entender-ho sinos surt un buffer de simbols que no entenem
});