class tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelaAtendimentos()
    }

    //tabelas

    criarTabelaAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, observacoes text, PRIMARY KEY(id))'
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro.sqlMessage)
            } else {
                console.log("Tabela Atendimentos foi criada com sucesso!")
            }
        })
    }
}

module.exports = new tabelas