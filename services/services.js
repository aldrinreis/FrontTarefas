const axios = require("axios");

module.exports = class Services {
  static async TarefaCreate(req, res) {
    let valores = req.body;

    const options = {
      url: "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/tarefas/Cadastrar",
      method: "POST",
      data: valores,
    };

    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async TarefaListar(req, res) {
    const options = {
      url: "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/tarefas",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const tarefa = response.data;
      res.render("tarefas/listar", { tarefa });
    });
  }

  //Update
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url:
        "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/tarefas/" +
        valores.id_tarefa,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso";
    res.render("mensagem", { mensagem });
  }

  //Delete
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url:
        "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/tarefas/" +
        id_tarefa,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
