class MenuDAO {
    constructor(bdMenu) {
        this._bdMenu = bdMenu

    }
    select_menu() {
        return new Promise((resolve, reject) => {
            this._bdMenu.all('SELECT * FROM MENU', (err, linhas)=>{
                    if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "menus": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }
    insert_menu(novoMenu) {
        return new Promise((resolve, reject) => {
            this._bdMenu.run(`
           INSERT INTO MENU (PRODUTO, CATEGORIA, VALOR)
            VALUES 
           (?,?,?)
            `, [novoMenu.produto, novoMenu.categoria, novoMenu.valor], (error) => {
                if (error) {
                    reject({
                        "pagamento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pagamento": novoMenu,
                        "erro": false
                    })
                }
            })
        })
    }
    alter_menu(id, alterMenu) {
        return new Promise((resolve, reject) => {
            this._bdMenu.run(`
           UPDATE MENU SET (PRODUTO, CATEGORIA, VALOR)= 
           (?,?,?) WHERE ID = ${id}
            `, [alterMenu.produto, alterMenu.categoria, alterMenu.valor], (error) => {
                if (error) {
                    reject({
                        "pagamento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pagamento": alterMenu,
                        "erro": false
                    })
                }
            })
        })
    }
}
 module.exports = MenuDAO