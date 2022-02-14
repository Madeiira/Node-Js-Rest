// CONFIGURAÇÃO DE TODAS AS MODIFICAÇÕES NECESSÁRIAS DE BIBLIOTECAS

const express = require('express') // Executar npm

const consign = require('consign') // Executar CONSIGN

const bodyParser = require('body-parser') // para conseguir ler os dados que estamos recebendo no body 


module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({extended: true})) // BROWSER FORMULARIO

    app.use(bodyParser.json()) // PERMITE O USO COMO SERVIÇO

    consign()
        .include('controllers') // incluindo pasta referente aos módulos
        .into(app) // compartilhando o app para todos os módulos

    return app

}