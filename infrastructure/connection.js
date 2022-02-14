const mysql = require ('mysql2')

const conexao = mysql.createConnection({

    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Anjos123@',
    database: 'agenda_petshop'
 
})

module.exports = conexao // exportar aquilo que será utilizado dentro de todo o projeto, em outros modulos