import axios from "axios"
import {useHistory} from "react-router-dom"

function BtnDelete  ({usuario}) {
    const history = useHistory()
    const handleDelete = async ( e ) => {
        e.preventDefault()
        try {
          await axios.delete(`/users/${usuario}`)
          history.go(0)
        } catch (error) {
          
        }
      }
      return(
        <button className="user__delete--btn btn" onClick={handleDelete}>Excluir</button>

      )
}

export default BtnDelete;