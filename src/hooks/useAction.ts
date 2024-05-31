import { useDispatch } from "react-redux"
import { deleteUserStore } from "../store/slices/users"

/**
 * Responsibility: return a simple function to delete an user by id. 
 * why: single source of truth about deleting an user.
 */
function useAction() {
  const dispatch = useDispatch() 
  const deleteUser = (id: number)=> dispatch(deleteUserStore(id))
  
  return {deleteUser}
}

export default useAction