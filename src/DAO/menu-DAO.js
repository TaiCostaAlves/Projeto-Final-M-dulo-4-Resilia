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
    select_menu_id(id){
        return new Promise((resolve, reject) => {
            this._bdMenu.all(`SELECT * FROM MENU WHERE ID = ${id}`, (err, linhas)=>{
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
                        "menu": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "menu": novoMenu,
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
                        "menu": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "menu": alterMenu,
                        "erro": false
                    })
                }
            })
        })
    }
    delete_menu(id) {
        return new Promise((resolve, reject) => {
            this._bdMenu.run(`
           DELETE FROM MENU WHERE ID = ${id}
            `, (error) => {
                if (error) {
                    reject({
                        "menu": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "mensage": "excluído com sucesso",
                        "erro": false
                    })
                }
            })
        })
    }
}
 module.exports = MenuDAO
 //module.exports = MenuDAO
