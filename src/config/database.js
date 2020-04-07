module.exports = {
  host: '127.0.0.1',
  username: 'wesley',
  password: '23111988',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAlises: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}

// Esse "timestamps" faz com que toda a tabela criada no banco tenham as colunas "createdAt" e "updatedAt" 
// de forma automatica (nao precisamos ficar criando estas colunas).

// Obs.: por default o sequelize segue o padrao CamelCase (por exemplo: quando criamos uma model "User", a tabela 
// criada terá o nome "Users", se criarmos uma model "UserGroup", ele cria "UserGroups").
// Utilizando este "underscored" força o sequelize a utilizar o padrao Underscores (user_group) para criar as tabelas
// e o "underscoredAll" aplica a mesma regra para os campos/colunas da tabela (por exemplo: "userEmail" ficaria "user_email")