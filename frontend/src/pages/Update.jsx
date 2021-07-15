import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Update(usuario) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setNascimento] = useState("");
  const [data_admissao, setAdmissao] = useState("");
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");
  const [nivel, setNivel] = useState("");
  const history = useHistory();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/users/${usuario.match.params["id"]}`);
        response = response.data.usuario;
        setNome(response.nome);
        setEmail(response.email);
        setNascimento(response.data_nascimento);
        setAdmissao(response.data_admissao);
        setSetor(response.setor);
        setCargo(response.cargo);
        setNivel(response.nivel);
      } catch (error) {}
    };
    getData();
  }, []);
  const handleModify = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/users/${usuario.match.params["id"]}`, {
        nome,
        email,
        data_nascimento,
        data_admissao,
        setor,
        cargo,
        nivel,
      });
      history.push("/users");
    } catch (error) {
      alert("deu ruim");
    }
  };
  const validateForm = async (e) => {
    e.preventDefault();
    let errors = [];
    let success = [];
    const nome = document.getElementById("nome");
    if (nome.value === "") {
      nome.classList.add("error");
      errors.push("nome");
    } else {
      success.push("nome");
    }
    const email = document.getElementById("email");
    if (email.value === "" || !email.value.indexOf("@") === -1) {
      email.classList.add("error");
      errors.push("email");
    } else {
      success.push("email");
    }
    const date = document.getElementById("date");
    if (date.value === "") {
      date.classList.add("error");
      errors.push("date");
    } else {
      success.push("date");
    }
    const dateAdm = document.getElementById("dateAdm");
    if (dateAdm.value === "") {
      dateAdm.classList.add("error");
      errors.push("dateAdm");
    } else {
      success.push("dateAdm");
    }
    const orderSetor = document.getElementById("orderSetor");
    if (orderSetor.value === "") {
      orderSetor.classList.add("error");
      errors.push("orderSetor");
    } else {
      success.push("orderSetor");
    }
    const orderCargo = document.getElementById("orderCargo");
    if (orderCargo.value === "") {
      orderCargo.classList.add("error");
      errors.push("orderCargo");
    } else {
      success.push("orderCargo");
    }
    const orderNivel = document.getElementById("orderNivel");
    if (orderNivel.value === "") {
      orderNivel.classList.add("error");
      errors.push("orderNivel");
    } else {
      success.push("orderNivel");
    }
    if (errors.length > 0) {
      success.forEach((element) => {
        const id = document.getElementById(element);
        id.classList.remove("error");
      });
      return false;
    }
    return handleModify(e);
  };
  return (
    <>
      <Header />
      <section id="updateUserSection" className="register-user">
        <form className="form" onSubmit={validateForm}>
          <div className="form__input-container">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="date">Data de nascimento</label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={data_nascimento}
              onChange={(e) => setNascimento(e.target.value)}
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="dateAdm">Data de admissão</label>
            <input
              type="date"
              name="dateAdm"
              id="dateAdm"
              required
              value={data_admissao}
              onChange={(e) => setAdmissao(e.target.value)}
            />
          </div>
          <div className="form__input-container order-by">
            <label htmlFor="orderSetor">Setor</label>
            <select
              name="orderSetor"
              id="orderSetor"
              required
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Selecione setor
              </option>
              <option value="Engenharia">Engenharia </option>
              <option value="Compras">Compras</option>
              <option value="Vendas">Vendas</option>
              <option value="Financeiro">Financeiro</option>
            </select>
          </div>
          <div className="form__input-container order-by">
            <label htmlFor="orderCargo">Cargo</label>
            <select
              name="orderCargo"
              id="orderCargo"
              required
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Selecione cargo
              </option>
              <option value="Auxiliar">Auxiliar </option>
              <option value="Técnico">Técnico</option>
              <option value="Engenheiro">Engenheiro</option>
              <option value="Diretor">Diretor</option>
            </select>
          </div>
          <div className="form__input-container order-by">
            <label htmlFor="orderNivel">Nivel</label>
            <select
              name="orderNivel"
              id="orderNivel"
              required
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="" disabled defaultValue>
                Selecione nivel
              </option>
              <option value="Junior">Junior </option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="Estagiário">Estagiário</option>
            </select>
          </div>
          <div className="form__btns">
            <input type="submit" value="Atualizar Usuário" />
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Update;
