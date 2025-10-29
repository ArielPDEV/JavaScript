let curtidas = []
let botao = document.getElementById("botao")

function addName(){
    let input = document.getElementById("input-text").value
    curtidas.push(input)
    document.getElementById("input-text").value = ''
    if (curtidas.length == 0){
        document.getElementById("texto").innerText = `Ninguém curtiu`
    }
    else if (curtidas.length == 1){
        document.getElementById("texto").innerText = `${curtidas[0]} curtiu`
    }
    else if (curtidas.length == 2){
        document.getElementById("texto").innerText = `${curtidas[0]}, ${curtidas[1]} curtiram`
    }
    else if (curtidas.length >= 3){
        document.getElementById("texto").innerText = `${curtidas[0]}, ${curtidas[1]} e mais ${curtidas.length - 2} curtiram`
    }
}

botao.addEventListener('click', addName)
setInterval(() => console.log(curtidas), 1000)