// MÓDULO REFERENTE A PAGINA DE ATENDIMENTOS

// EXPORTAR MODULO

module.exports = app =>{

app.get('/atendimentos', (req, res) => res.send('Rota de get  atendimentos.') ) // // TESTE NODEMON, DEPENDENCIA QUE FAZ COM QUE ATUALIZAÇÕES SEJAM ATUALIZADAS A PARTIR DO CTRL + S


app.post('/atendimentos', (req,res) => res.send('Rota de post atendimentos'))

}