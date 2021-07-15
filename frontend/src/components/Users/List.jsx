import React from "react";
import BtnDelete from "../Buttons/BtnDelete";
import BtnEdit from "../Buttons/BtnEdit";
import BtnSee from "../Buttons/BtnSee";

export function data(data) {
  const data_americana = data;
  const convert_data = data_americana.split("T")[0];
  const data_brasileira = convert_data.split("-").reverse().join("/");
  return data_brasileira;
}
function List({ users }) {
  return (
    <>
      <section className="users">
        {users.map((user, idx) => (
          <div id={idx} key={idx} className="card-list">
            <h1>{user.nome}</h1>
            <h4 className="title">{user.email}</h4>
            <p>
              <strong>Data de nascimento:</strong> {data(user.data_nascimento)}{" "}
              <br></br>
              <strong>Data de admissão: </strong>
              {data(user.data_admissao)} <br></br>
              <strong>Setor:</strong> {user.setor} <br></br>
              <strong>Cargo:</strong> {user.cargo} <br></br>
              <strong>Nivel:</strong> {user.nivel} <br></br>
              <strong>Data de inserção:</strong> {data(user.audit_data_insert)}{" "}
              <br></br>
              <strong>Data de atualização:</strong>{" "}
              {data(user.audit_data_update)} <br></br>
            </p>
            <BtnSee usuario={user.id} />
            <BtnEdit usuario={user.id} />
            <BtnDelete usuario={user.id} />
          </div>
        ))}
      </section>
    </>
  );
}

export default List;
