let j = 0

function criarLi (){
    const ul = document.getElementById("lista-check");
    const texto = document.getElementById("input-add").value;
    document.getElementById("input-add").value = ''
    const li = document.createElement("li");
    li.id = j
    const div = document.createElement("div")
    div.className = "item-da-lista"
    const check = document.createElement("input")
    check.type = "checkbox"
    check.className = "check"
    const p = document.createElement("p")
    p.class = "nclick"
    p.textContent = texto;
    li.appendChild(div)
    div.appendChild(check)
    div.appendChild(p)
    ul.appendChild(li);
    j += 1
}
function atualizarCheck(){
    li_list = document.getElementsByTagName("li")
    for (let i = 0; i < li_list.length; i ++){
        item = li_list[i].getElementsByTagName("div")[0]
        if (item.getElementsByTagName("input")[0].checked == true){
            item.getElementsByTagName("p")[0].className = "click"
        }
        if (item.getElementsByTagName("input")[0].checked == false){
            item.getElementsByTagName("p")[0].className = "nclick"
        }
    }
}
setInterval(atualizarCheck, 100)