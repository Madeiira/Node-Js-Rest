// Subir servidor pro ar

const customExmpress = require('./config/customExpress')

const app = customExmpress();

app.listen(3000, () => console.log('Rodando tudo normal'))
 