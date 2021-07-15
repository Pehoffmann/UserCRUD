import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [data_nascimento, setNascimento] = useState("");
  const [data_admissao, setAdmissao] = useState("");
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");
  const [nivel, setNivel] = useState("");
  const history = useHistory();
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/users", {
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
    return handleAdd(e);
  };
  return (
    <section id="addUserSection" className="register-user">
      <form className="form" id="form" onSubmit={validateForm}>
        <div className="form__input-container">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
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
            value={data_admissao}
            onChange={(e) => setAdmissao(e.target.value)}
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="orderSetor" className="orderSetor">
            Setor
          </label>
          <select
            name="orderSetor"
            id="orderSetor"
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
        <div className="form__input-container">
          <label htmlFor="orderCargo" className="orderCargo">
            Cargo
          </label>
          <select
            name="orderCargo"
            id="orderCargo"
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
        <div className="form__input-container">
          <label htmlFor="orderNivel">Nivel</label>
          <select
            name="orderNivel"
            id="orderNivel"
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
          <input type="submit" value="Adicionar Usuário" />
        </div>
      </form>
    </section>
  );
}

export default Register;
