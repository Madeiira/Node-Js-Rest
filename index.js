const express = require ('express') // Executar npm

const consign = require ('consign') // Executar CONSIGN


const app = express()

consign()
    .include('controllers') // incluindo pasta referente aos módulos
    .into(app) // compartilhando o app para todos os módulos

app.listen(3000, () => console.log('servidor rodando na porta 3000')) // Função de quando executar / adentrar a porta 3000 

app.get('/', (req, res) => res.send('Servidor rodando, tudo ok') ) // res é a resposta da req 

 