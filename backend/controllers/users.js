const Sequelize = require("sequelize"),
  { Funcionario } = require("../models/Usuario"),
  { Op } = Sequelize;

const orderResults = (orderByParam = "id_ASC") => {
  const orderParam = orderByParam.split("_")[0],
    orderDirection = orderByParam.split("_")[1];
  return [[orderParam, orderDirection]];
};

const controller = {
  list: async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { page = 1, limit = 8, orderBy } = await req.query,
      order = orderResults(orderBy);
    const { count: total, rows: users } = await Funcionario.findAndCountAll({
      order,
      limit,
      offset: (page - 1) * limit,
    });
    res.json({
      users,
      total,
      page,
      pages: Math.ceil(total / limit),
      orderParam: order[0][0],
      orderDirection: order[0][1],
    });
  },
  userIndex: async (req, res, next) => {
    const { id } = req.params,
      usuario = await Funcionario.findOne({ where: { id } });
    res.json({
      usuario,
    });
  },
  register: async (req, res, next) => {
    try {
      const {
        nome,
        email,
        data_nascimento,
        data_admissao,
        setor,
        cargo,
        nivel,
      } = req.body;
      const usuario = await Funcionario.create({
        nome,
        email,
        data_nascimento,
        data_admissao,
        setor,
        cargo,
        nivel,
      });
      if (usuario) {
        return res.status(200).json({ message: "Usuario adicionado" });
      }
      throw { message: "Erro" };
    } catch (error) {
      return res.status(400).json({ message: "Erro ao adicionar o usuario" });
    }
  },
  userUpdate: async (req, res, next) => {
    const { id } = req.params,
      { nome, email, data_nascimento, data_admissao, setor, cargo, nivel } =
        req.body,
      user = await Funcionario.update(
        {
          nome,
          email,
          data_nascimento,
          data_admissao,
          setor,
          cargo,
          nivel,
        },
        { where: { id } }
      );
    if (!user) {
      return res
        .status(500)
        .json({ message: "Ops... Erro ao atualizar o usuario!" });
    }
    return res.status(200).json({ message: "Usuario atualizado com sucesso!" });
  },
  userDelete: async (req, res, next) => {
    const { id } = req.params,
      user = await Funcionario.destroy({
        where: { id },
        force: true,
      });
    return res.status(200).json({ message: "Item deletado" });
  },
  search: async (req, res, next) => {
    const { page = 1, limit = 8, orderBy } = await req.query,
      order = orderResults(orderBy);
    const { count: total, rows: users } = await Funcionario.findAndCountAll({
      where: whereClause,
      order,
      limit,
      offset: (page - 1) * limit,
    }).catch(function (err) {
      res.status(400);
    });
    if (users) {
      res.render({
        title: "Página de Resultado de Usuários",
        subtitle:
          "Confira a seguir os usuários encontrados em nosso banco de dados",
        users,
        total,
        page,
        pages: Math.ceil(total / limit),
        orderParam: order[0][0],
        orderDirection: order[0][1],
      });
    } else {
      res.status(500).send(`Ops... houve algum erro em nossa busca`);
    }
  },
};

module.exports = controller;
