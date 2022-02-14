// MÓDULO REFERENTE A PAGINA DE ATENDIMENTOS

// EXPORTAR MODULO

bodyres = JSON.parse('{"result":true}')

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Rota de get  atendimentos.')) // // TESTE NODEMON, DEPENDENCIA QUE FAZ COM QUE ATUALIZAÇÕES SEJAM ATUALIZADAS A PARTIR DO CTRL + S


    app.post('/atendimentos', (req, res) => {


        console.log(bodyres)
        res.send(bodyres)
    })

}