function criarProduto(nome, marca, preco){
    return{
        nome,
        marca,
        preco,
    }
}
console.log(criarProduto("Notebook", 3000, "Acer"))