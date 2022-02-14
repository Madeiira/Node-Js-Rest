// Subir servidor pro ar

const customExmpress = require('./config/customExpress')

const conexao = require('./infrastructure/connection')

conexao.connect(erro=>{

    if(erro){
        console.log(erro)
    }else{
        console.log('conectando com sucesso')

        const app = customExmpress();

        app.listen(3000, () => console.log('OK'))
    }

}) 

