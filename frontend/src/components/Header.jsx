import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Actionsys CRUD</h1>
      <nav className="header__nav">
        <a href="/" target="_self" rel="next" title="Acessar página iniciar">
          Início
        </a>
        <a
          href="/users/add"
          target="_self"
          rel="next"
          title="Cadastrar usuário"
        >
          Adicionar
        </a>
        <a
          href="/users"
          target="_self"
          rel="next"
          title="Ver listagem de funcionários"
        >
          Funcionários
        </a>
        <a
          href="https://github.com/Pehoffmann/desafioActionsys"
          target="_blank"
          rel="noreferrer"
          title="Ver repositório"
        >
          Repositório
        </a>
      </nav>
    </header>
  );
}

export default Header;
