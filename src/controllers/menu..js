const Menu = require("../models/Menu")
// module.exports = (app) => {
//     app.get("/", (req, res) => {
//         return res.send("<h1>Funciona</h1>")

//     })
//     app.get("/menu", (req,res)=>{
//         Menu.busca(res)
//     }) 
// }
const Menu = (app , bdVerdadeiro) => { 
    app.get('/Menu', (req, res) => {
      bdVerdadeiro.all('SELECT * FROM MENU', (err, linhas)=>{
        if(err){
          res.json({"menssagem": err.message, "erro": true})
        } else {
          res.json({"caixa": linhas, "count": linhas.legth, "erro": false})
        }
      })
     
    })
} 

module.exports  =  caixa