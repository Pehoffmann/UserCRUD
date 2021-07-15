<h1 align="center">
  🚀<br>UserCRUD
</h1>

![Screenshot]()

Nesse desafio foi criado um projeto simples, onde se pode
criar, consultar, editar e excluir funcionários a partir de um banco de
dados MySQL, realizando o CRUD através do
Sequelize.

## 🛠 Pré Requisitos

Para executar esse repositório, é necessario:

1. VS Code (ou outra IDE) para trabalhar o código

2. GitBash (ou outro terminal) para executar os comandos de instalação de pacotes

3. Banco de dados MySQL (XAMPP/LAMP/MAMP - de acordo com seu sistema operacional)

4. Um SGBD (Sistema de Gestão de Banco de Dados) - Workbench ou o phpMyAdmin

5. Node.js instalado 

6. NPM (ou Yarn) instalado 


## 📚 Como Usar o Repositório?

1. Ativar o MySQL através do XAMPP

2. Ativar sua conexão 

3. Criar o seguinte Banco de Dados no MySQL

```sql
-- CRIAÇÃO DB:
CREATE DATABASE actionsys;
USE actionsys;

-- TABELAS:

CREATE TABLE funcionarios (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_admissao DATE NOT NULL,
    setor VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    nivel VARCHAR(100) NOT NULL,
    audit_data_insert TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	audit_data_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Populando tabela:

INSERT INTO funcionarios (nome, email, data_nascimento, data_admissao, setor, cargo, nivel)
VALUES ('Pedro Hoffmann','pedrob_hoffmann@outlook.com','2003-03-14','2021-07-15','Engenharia', 'Engenheiro', 'Junior'),
('Wolfgang Amadeus Mozart','wolfg@ngamadeusmoz.art','1756-01-27','2021-07-16','Compras', 'Diretor', 'Pleno'),
('Ludwig van Beethoven','ludv@nbeethov.en','1770-12-17','2021-07-17','Vendas', 'Técnico', 'Senior'),
('Pyotr Ilyich Tchaikovsky','tch@ikov.sky','1840-05-07','2021-07-18','Compras', 'Auxiliar', 'Estagiário'),
('George Friedrich Händel','h@ndel.com','1685-02-23','2021-07-19','Financeiro', 'Auxiliar', 'Senior'),
('Giacomo Puccini','gi@puccini.com','1785-02-23','2021-07-19','Engenharia', 'Diretor', 'Senior'),
('Johannes Brahms','br@hms.net','1675-02-23','2021-07-19','Compras', 'Auxiliar', 'Pleno'),
('Antonio Salieri ','tonho@salieri.mus','1687-02-23','2021-07-19','Engenharia', 'Auxiliar', 'Junior'),
('Antonio Vivaldi ','vivaldi@gmail.com','1675-02-23','2021-07-19','Vendas', 'Diretor', 'Pleno'),
('Franz Schubert ','schubert@fra.nz','1775-02-23','2021-07-19','Engenharia', 'Engenheiro', 'Pleno'),
('Johann Sebastian Bach ','johan@ba.ch','1677-02-23','2021-07-19','Financeiro', 'Diretor', 'Senior'),
('Frédéric Chopin ','fred@chop.in','1777-02-23','2021-07-19','Financeiro', 'Técnico', 'Senior'),
('Chiquinha Gonzaga ','chica@gonzaga.com','1775-02-23','2021-07-19','Compras', 'Diretor', 'Junior'),
('Heitor Villa-Lobos', 'villa@lobos.com', '1585-02-23','2021-07-19','Engenharia', 'Auxiliar', 'Pleno'),
('Alfredo da Rocha Viana Filho ','pixinguinha@ig.com.br','1475-02-23','2021-07-19','Financeiro', 'Engenheiro', 'Senior'),
('Ary Barroso ','barroso.ary@terra.com.br','1874-02-23','2021-07-19','Financeiro', 'Engenheiro', 'Senior'),
('Angenor de Oliveira ','cartola@live.com','1522-02-23','2021-07-19','Engenharia', 'Técnico', 'Senior'),
('Noel Rosa ','noel.rosa@outlook.com','1875-02-23','2021-07-19','Compras', 'Técnico', 'Junior'),
('João Rubinato ','adoni@ran-barbosa.com','1685-02-23','2021-07-19','Financeiro', 'Diretor', 'Pleno'),
('Baden Powell ','baden@powell.com.br','1600-02-23','2021-07-19','Engenharia', 'Auxiliar', 'Junior');
```

8. Ctrl + Shift + Enter na ultima linha para utilizar todo o Banco de Dados

8. Na pasta raiz do projeto executar o seguinte comando para instalar o concurrently

```sh
npm install
```

9. Após instalar o concurrently, ainda na pasta raiz executar o seguinte comando no terminal para instalar as dependências do backend e frontend

```sh
npm run dev-install
```

8. Após conclusão, executar o seguinte comando

```sh
npm run dev
```

## 💻 Tecnologias

Usaremos o Node.js como tecnologia de back end.

Para o servidor, utilizaremos o Express.

Para a interface com o usuário, utilizaremos o React.

Para o banco de dados, seguiremos com MySQL como linguagem (e o pacote MySQL2) e utilizaremos o Sequelize (e o Sequelize-CLI como dependência para desenvolvimento) para manipular o banco a partir do back end.

Por fim, usaremos o pacote nodemon para que o servidor seja automaticamente atualizado a cada alteração em nosso código.

## 🧑🏼 Autor<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Pehoffmann">
        <img src="https://avatars.githubusercontent.com/u/74218914?v=4" width="100px;" alt="Foto do Pedro Hoffmann no GitHub"/><br>
        <sub>
          <b>Pedro Hoffmann</b>
        </sub>
      </a><br>
    </td>   
  </tr>
</table>