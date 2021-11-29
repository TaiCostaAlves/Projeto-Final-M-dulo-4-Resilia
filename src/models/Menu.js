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
    verificaProduto(produto){
        if(produto !== "" ){
            return produto
        }else {
          return 0
        }
    }
    verificaCategoria(categoria){
        if(categoria !== "" ){
            return categoria
        }else {
            return 0
        }
    }
    verificaValor(valor){
        if(valor >= 0  || valor !== ''){
            return valor
        }else {
            return -1  
          
        }
    }
    
}



module.exports = Menu
