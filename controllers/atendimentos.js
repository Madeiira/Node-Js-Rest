// MÓDULO REFERENTE A PAGINA DE ATENDIMENTOS

// EXPORTAR MODULO

const Atendimento = require('../models/atendimentos')

resposta = JSON.parse('{"resultado":"Atendimento cadastrado com sucesso!"}')

module.exports = app => {

    //app.get('/atendimentos', (req, res) => res.send('Rota de get  atendimentos.')) // // TESTE NODEMON, DEPENDENCIA QUE FAZ COM QUE ATUALIZAÇÕES SEJAM ATUALIZADAS A PARTIR DO CTRL + S


    // ROTA GET DE RESGATE DE DADOS
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    //ROTA GET DE RESGATE DE DADO UNICO
    app.get('/atendimentos/:id', (req, res) => {
        
        const reqId = parseInt(req.params.id)

        Atendimento.buscaPorId(reqId, res);
    });

    app.post('/atendimentos', (req, res) => {


        const corpo = req.body

        if (corpo.observacoes == '' || corpo.observacoes == null) {
            corpo.observacoes = "Sem Observações"
        }


        Atendimento.adiciona(corpo,res)


    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    
        Atendimento.altera(id, valores, res)
    })

}