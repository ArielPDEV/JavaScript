x = 25
y = 5

function show(x, y, z, v){
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(v);
}
function sum(x, y){
    let res = x + y;
    return "Soma entre " + x + " e " + y + ", " + res;
}
function sub(x, y){
    let res = x - y;
    return "Subtração entre " + x + " e " + y + ", " + res;
}
function mul(x, y){
    let res = x * y;
    return "Multiplicação entre " + x + " e " + y + ", " + res;
}
function div(x, y){
    let res = x / y;
    return "Divisão entre " + x + " e " + y + ", " + res;
}
show(sum(x, y), sub(x, y), mul(x, y), div(x, y));
