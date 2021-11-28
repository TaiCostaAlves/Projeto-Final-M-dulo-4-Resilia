//const Menu = require("../models/Menu")
const Menu_DAO = require('../DAO/menu-DAO')
const Menu = require('../models/Menu.js')
const bdMenu = require('../infra/sqlite-db');
module.exports = (app) => {
  const menu_Dao = new Menu_DAO(bdMenu);
  app.get("/", async (req, res) => {
    console.log('Rodando')
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
    try {
      const respMenu = await menu_Dao.select_menu();
      res.status(200).json(respMenu)
    } catch (error) {
      res.status(404).json({ error })
    }
  })
  app.post("/cria-menu", async (req, res) => {
    console.log(req.body)
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
    const body = req.body
    try {
      //const pedido = req.params.pedido
      const novoMenu = new Menu(body.PRODUTO, body.CATEGORIA, body.VALOR)
      const respMenu = await menu_Dao.insert_menu(novoMenu);
      console.log(novoMenu)
      res.status(200).json(respMenu)
    } catch (error) {
      res.status(404).json({ error })
    }
  })

  app.put("/menucriado/:id", async (req, res) => {
    console.log(req.body)
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
      const menurecebido = req.params.id
    const body = req.body
    try {
     
      const novoMenu = new Menu(body.PRODUTO, body.CATEGORIA, body.VALOR)
      const respMenu = await menu_Dao.alter_menu(menurecebido, novoMenu);
      console.log(novoMenu)
      res.status(200).json(respMenu)
    } catch (error) {
      res.status(404).json({ error })
    }
  })

}

