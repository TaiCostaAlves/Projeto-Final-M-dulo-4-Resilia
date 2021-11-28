const customExpress = require("./config/customExpress")
const app = customExpress ()
const PORT = process.env.PORT || 3000
//const Menu  = require('./controller/Menu')
// app.get('/',(req, res) => {
//     res.send ({
//         'Oi': 'Oi'
//     })
// })

app.listen(PORT, () =>{
    console.log("Servidor rodando na porta 3000")
})