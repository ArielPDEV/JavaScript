let livros = [{'titulo':"labirinto no Escuro", 'autor':"Luiz Dill", 'quantidade':5}]

function listarLivros(lista=livros){
    for (let i = 0; i < lista.length; i++){
        console.log(lista[i])
    }
    console.log('----------------------------------------------------------')
}
function adicionarLivro(titulo, autor, quantidade, lista=livros){
    lista.push({'titulo':titulo, 'autor':autor, 'quantidade':quantidade})
}
function removerLivro(titulo, lista=livros){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].titulo == titulo){
            lista.splice(i, 1)
        }
    }
}
function atualizarQuantidade(titulo, novaQuant, lista=livros){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].titulo == titulo){
            lista[i].quantidade = novaQuant
        }
    }
}

listarLivros()
adicionarLivro("1948", "George Orwell", 3)
listarLivros()
atualizarQuantidade("1948", 8)
listarLivros()
removerLivro('1948')
listarLivros()