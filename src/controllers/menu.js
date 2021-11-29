//const Menu = require("../models/Menu")
const Menu_DAO = require('../DAO/menu-DAO')
const Menu = require('../models/Menu.js')
const bdMenu = require('../infra/sqlite-db');
const ConfirmaID = require('../models/valida_id');
module.exports = (app) => {
  const menu_Dao = new Menu_DAO(bdMenu);
  app.get("/menu", async (req, res) => {
    console.log('id')
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
    try {
      const respMenu = await menu_Dao.select_menu();
      res.status(200).json(respMenu)
    } catch (error) {
      res.status(404).json({ error })
    }
  })
  app.get("/menu/:id", async (req, res) => {
    const idMenu = req.params.id
    console.log(idMenu)
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
    try {
      const respMenu = await menu_Dao.select_menu_id(idMenu);
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
      const respMenu = await menu_Dao.select_menu_id(menurecebido);
      const confirmaId = new ConfirmaID(respMenu.menus.length)
      if (confirmaId.id === -1) {
        res.send("Item não encontrado")
      } else {
        const novoMenu = new Menu(body.PRODUTO, body.CATEGORIA, body.VALOR)
        console.log(novoMenu)
        if (novoMenu.produto === 0) {
          res.send("Campo produto é obrigatorio")
        } else if (novoMenu.valor === -1) {
          res.send("Campo Valor é obrigatorio")
        } else if (novoMenu.categoria === 0) {
          res.send("Campo Categoria é obrigatorio")
        } else {
          const respMenu = await menu_Dao.alter_menu(menurecebido, novoMenu);
          console.log(novoMenu)
          res.status(200).json(respMenu)
        }
      }
    } catch (error) {
      res.status(404).json({ error })
    }
  })
  app.delete("/excluir/:id", async (req, res) => {
    console.log(req.body)
    // bdCaixa.all('SELECT * FROM MENU', (err, linhas) => {
    const menurecebido = req.params.id
    try {
      const respMenu = await menu_Dao.select_menu_id(menurecebido);
      const confirmaId = new ConfirmaID(respMenu.menus.length)
      if (confirmaId.id === -1) {
        res.send("Item não encontrado")
      } else {
        const respMenu = await menu_Dao.delete_menu(menurecebido);
        res.status(200).json(respMenu)
      }
    } catch (error) {
      res.status(404).json({ error })
    }
  })
}

