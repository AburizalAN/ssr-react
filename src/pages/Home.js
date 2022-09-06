import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataUsers } from "../store/global/actions"

const Home = ({ route }) => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.global)

  console.log("route check", route)

  
  useEffect(() => {
    dispatch(fetchDataUsers())
  }, [])

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>{`${user.name}`}</li>
          ))
        ) : (
          <li>No users</li>
        )}
      </ul>
    </div>
  )
}

const loadData = (store) => {
  return store.dispatch(fetchDataUsers())
}

export default {
  element: <Home />,
  loadData: loadData,
}