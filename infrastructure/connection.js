const mysql = require ('mysql')

const conexao = mysql.createConnection({

    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Anjos123@',
    database: 'agenda_petshop'
 
})

module.exports = conexao // exportar aquilo que será utilizado dentro de todo o projeto, em outros modulos