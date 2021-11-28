/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const MENU_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MENU" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PRODUTO" varchar(64),
    "CATEGORIA" varchar(64),
    "VALOR" real
  );`;

const ADD_MENU_DATA = `
INSERT INTO MENU (ID, PRODUTO, CATEGORIA, VALOR)
VALUES 
    (1, 'Coca Cola', 'Bebida' , 6.0),
    (2, 'Cerveja Heineken', 'Bebida', 15.00),
    (3, 'Porção de torresmos', 'Comida', 25.00)
`

function criaTabelaMenu() {
    db.run(MENU_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaMenu() {
    db.run(ADD_MENU_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaMenu();
    populaTabelaMenu();
   
});