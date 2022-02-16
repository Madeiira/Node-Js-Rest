const res = require('express/lib/response')
const moment = require('moment')

const conexao = require('../infraestrutura/conexao')
// VALIDAÇÕES DA RN, DEVEM SER FEITA NO MODELS
class Atendimento {

    adiciona(atendimento, res) {


        // GERANDO DATAS
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        //VALIDAÇÃO DA DATA
        const validacaoData = moment(data).isSameOrAfter(dataCriacao)

        //VALIDAÇÃO DO NOME
        const validacaoNome = atendimento.cliente.length >= 3

        // OBJ DE VALIDAÇÃO

        const validacoes = [{
                nome: 'data',
                valido: validacaoData,
                mensagem: 'Data deve ser igual ou posterior a data de hoje.'
            },
            {
                nome: 'cliente',
                valido: validacaoNome,
                mensagem: 'Nome deve conter mais que 2 caracteres.'
            }
        ]

        // VALIDANDO ERROS

        const erros = validacoes.filter(campo => !campo.valido)
        const errosExistentes = erros.length



        if (errosExistentes) {
            erros.forEach(element => {
                res.status(400).write(element.mensagem + "\n")
            });
            res.end()

        } else {

            const atendimentoDatado = {
                ...atendimento,
                dataCriacao,
                data
            }

            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }
    }

    lista(res) { // LISTAR TODOS
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) { // LISTAR POR 1 ID
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }

        })
    }

    atualizarCampo(id, valores, res) { // ATULIZAR POR CAMPO (PATCH)
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        if(valores.data){

            valores.data =  moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        }

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })

    }

    deletarRegistro(id,res){
        const sql = 'DELETE FROM Atendimentos WHERE id=?'


        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento