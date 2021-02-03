const math = {};

function add(x1,x2){
    return x1+x2;
}

function substract(x1,x2){
    return x1 - x2;
}

function multiply(x1,x2){
    return x1 * x2;
}

function divide(x1,x2){
    if(x2==0){
        console.log("No se pot dividir entre 0");
    }
    else return x1/x2;
}




// exports.add = add;//si desde index, cridam a add, realitzarem la funcio add
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;



math.add=add;
math.substract= substract;
math.multiply= multiply;
math.divide= divide;

module.exports = math; //exportam objecte sencer  


