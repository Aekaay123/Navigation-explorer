import { useParams } from "react-router-dom"


const UserPage = () => {
    const{id}=useParams();
  return (
    <div>This is user with id {id}</div>
  )
}

export default UserPage