// Subir servidor pro ar

const customExmpress = require('./config/customExpress')

const conexao = require('./infrastructure/connection')


const app = customExmpress();

app.listen(3000, () => console.log('OK'))