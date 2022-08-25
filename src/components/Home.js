import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataUsers } from "../store/global/actions"

const Home = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.global)

  useEffect(() => {
    dispatch(fetchDataUsers())
  }, [])

  console.log('users', users)

  return (
    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <li>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
          ))
        ) : (
          <li>No users</li>
        )}
      </ul>
    </div>
  )
}

export default Home