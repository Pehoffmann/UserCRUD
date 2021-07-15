import { useHistory } from "react-router-dom";

function BtnEdit({ usuario }) {
  const history = useHistory();
  const handleEdit = async (e) => {
    e.preventDefault();
    history.push(`/users/edit/${usuario}`);
  };
  return (
    <button className="user__edit--btn btn" onClick={handleEdit}>
      Editar
    </button>
  );
}

export default BtnEdit;
