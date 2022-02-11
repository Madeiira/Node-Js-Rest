const express = require ('express') // Executar npm

const app = express()

app.listen(3000, () => console.log('servidor rodando na porta 3000')) // Função de quando executar / adentrar a porta 3000 

app.get('/', (req, res) => res.send('Servidor rodando, tudo ok') ) // res é a resposta da req 

app.get('/atendimentos', (req, res) => res.send('Rota de get para atendimentos.') ) // // TESTE NODEMON, DEPENDENCIA QUE FAZ COM QUE ATUALIZAÇÕES SEJAM ATUALIZADAS A PARTIR DO CTRL + S