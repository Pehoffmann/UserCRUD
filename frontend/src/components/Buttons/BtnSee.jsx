import { useHistory } from "react-router-dom";

function BtnSee({ usuario }) {
  const history = useHistory();
  const handleSee = async (e) => {
    e.preventDefault();
    history.push(`/users/${usuario}`);
  };
  return (
    <button className="user__see--btn btn" onClick={handleSee}>
      Ver
    </button>
  );
}

export default BtnSee;
