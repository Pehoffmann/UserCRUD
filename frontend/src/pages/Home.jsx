import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="main-section">
          <h2 className="main-section__title">Página Inicial</h2>
          <h3 className="main-section__subtitle">
            Bem vindo ao desafio Actionsys!
          </h3>
          <p className="main-section__description">
            Nesse desafio foi criado um projeto simples, onde se pode
            criar, consultar, editar e excluir funcionários a partir de um banco de
            dados MySQL, realizando o CRUD através do
            Sequelize.
          </p>
        </section>
        <div className="cta">
          <a
            href="/users"
            rel="next"
            target="_self"
            title="Ver listagem de usuários"
            className="cta__btn"
          >
            Ver Lista de Funcionários
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
