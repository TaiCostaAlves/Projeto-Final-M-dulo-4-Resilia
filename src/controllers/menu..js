const Menu = require("../models/Menu")
module.exports = (app) => {
    app.get("/", (req, res) => {
        return res.send("<h1>Funciona</h1>")

    })
    app.get("/menu", (req,res)=>{
        Menu.busca(res)
    }) 
}