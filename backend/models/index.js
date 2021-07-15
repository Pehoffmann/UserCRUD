module.exports = (sequelize, DataType) => {
  const Funcionario = sequelize.define(
    "Funcionario",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataType.STRING,
        allowNull: false,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: DataType.DATE,
        allowNull: false,
      },
      data_admissao: {
        type: DataType.DATE,
        allowNull: false,
      },
      setor: {
        type: DataType.STRING,
        allowNull: false,
      },
      cargo: {
        type: DataType.STRING,
        allowNull: false,
      },
      nivel: {
        type: DataType.STRING,
        allowNull: false,
      },
      audit_data_insert: {
        type: DataType.DATE,
        allowNull: true,
      },
      audit_data_update: {
        type: DataType.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "funcionarios",
      timestamps: false,
    }
  );

  return Funcionario;
};
