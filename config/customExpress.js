// CONFIGURAÇÃO DE TODAS AS MODIFICAÇÕES NECESSÁRIAS DE BIBLIOTECAS

const express = require('express') // Executar npm

const consign = require('consign') // Executar CONSIGN

const bodyParser = require('body-parser')


module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))

    app.use(bodyParser.json())

    consign()
        .include('controllers') // incluindo pasta referente aos módulos
        .into(app) // compartilhando o app para todos os módulos

    return app

}