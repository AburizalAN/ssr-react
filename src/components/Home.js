import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataUsers } from "../store/global/actions"

const Home = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.global)

  useEffect(() => {
    dispatch(fetchDataUsers())
  }, [])

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
          ))
        ) : (
          <li>No users</li>
        )}
      </ul>
    </div>
  )
}

export const loadData = (store) => {
  return store.dispatch(fetchDataUsers())
}

export default Home