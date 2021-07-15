import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function User(usuario) {
  const [dados, setDados] = useState({
      usuario:[]
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${usuario.location["pathname"]}`);
        setDados(response.data);
      } catch (error) {
      }
    };
    getData();
  }, []);
  return (
    <>
    <Header />
    <section id="addUserSection" className="register-user">
      <form className="form">
        <div className="form__input-container">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={dados.usuario.nome ? dados.usuario.nome : null}
            disabled
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={dados.usuario.email}
            disabled
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="date">Data de nascimento</label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={dados.usuario.data_nascimento}
            disabled
          />
        </div>
        <div className="form__input-container">
          <label htmlFor="dateAdm">Data de admissão</label>
          <input
            type="date"
            name="dateAdm"
            id="dateAdm"
            required
            value={dados.usuario.data_admissao}
            disabled
          />
        </div>
        <div className="form__input-container order-by">
          <label htmlFor="orderBy">Setor</label>
          <select name="orderBy" id="orderBy" value={dados.usuario.setor} disabled>
          <option value="" disabled defaultValue>
              Selecione cargo
            </option>
            <option value="Engenharia">Engenharia </option>
            <option value="Compras">Compras</option>
            <option value="Vendas">Vendas</option>
            <option value="Financeiro">Financeiro</option>
          </select>
        </div>
        <div className="form__input-container order-by">
          <label htmlFor="orderBy">Cargo</label>
          <select name="orderBy" id="orderBy" value={dados.usuario.cargo} disabled>
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
          <label htmlFor="orderBy">Nivel</label>
          <select name="orderBy" id="orderBy" value={dados.usuario.nivel} disabled>
            <option value="" disabled defaultValue>
              Selecione nivel
            </option>
            <option value="Junior">Junior </option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
            <option value="Estagiário">Estagiário</option>
          </select>
        </div>
      </form>
    </section>
    <Footer />
    </>
  );
}

export default User;
