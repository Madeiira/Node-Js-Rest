// CONFIGURAÇÃO DE TODAS AS MODIFICAÇÕES NECESSÁRIAS DE BIBLIOTECAS

const express = require ('express') // Executar npm

const consign = require ('consign') // Executar CONSIGN

module.exports = () =>{ 
    
    const app = express()

    consign()
        .include('controllers') // incluindo pasta referente aos módulos
        .into(app) // compartilhando o app para todos os módulos

    return app

}
