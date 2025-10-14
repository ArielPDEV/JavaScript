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
    return "O resultado de " + x + " + " + y + " é " + res + ".";
}
function sub(x, y){
    let res = x - y;
    return "O resultado de " + x + " - " + y + " é " + res + ".";
}
function mul(x, y){
    let res = x * y;
    return "O resultado de " + x + " * " + y + " é " + res + ".";
}
function div(x, y){
    let res = x / y;
    return "O resultado de " + x + " / " + y + " é " + res + ".";
}
show(sum(x, y), sub(x, y), mul(x, y), div(x, y));
