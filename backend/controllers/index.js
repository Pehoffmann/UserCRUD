const controller = {
  index: (req, res, next) =>
    res.render("index", {
      title: "Página Inicial",
      subtitle: "Bem vindo à Actionsys!",
    }),
};

module.exports = controller;
