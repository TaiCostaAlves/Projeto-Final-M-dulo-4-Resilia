// //class Menu {
//     static busca(res) {
//         res.send("<h1>To na rota</h1>")
//     }
// }

// module.exports = Menu
class Menu {

    constructor(produto, categoria, valor) {
        this.produto = this.verificaProduto(produto)
        this.categoria = this.verificaCategoria(categoria)
        this.valor = this.verificaValor(valor)
    }

    verificaValor(valor){
        if(valor !== "" ){
            return valor
        }else {
            console.log('erro valor')
        }
    }
    verificaCategoria(categoria){
        if(categoria !== "" ){
            return categoria
        }else {
            console.log('erro categoria')
        }
    }
    verificaProduto(produto){
        if(produto !== "" ){
            return produto
        }else {
            console.log('erro produto')
        }
    }
}

module.exports = Menu
