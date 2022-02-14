// MÓDULO REFERENTE A PAGINA DE ATENDIMENTOS

// EXPORTAR MODULO

const Atendimento = require('../models/atendimentos')

resposta = JSON.parse('{"resultado":"Atendimento cadastrado com sucesso!"}')

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Rota de get  atendimentos.')) // // TESTE NODEMON, DEPENDENCIA QUE FAZ COM QUE ATUALIZAÇÕES SEJAM ATUALIZADAS A PARTIR DO CTRL + S


    app.post('/atendimentos', (req, res) => {

        
        const corpo = req.body
        
        if(corpo.observacoes == '' || corpo.observacoes == null){
            corpo.observacoes = "Sem Observações"
        }


        Atendimento.adiciona(corpo)


        res.send(resposta.resultado)
    })

} 