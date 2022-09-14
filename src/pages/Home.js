import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDataUsers } from "../store/global/actions"
import styled from 'styled-components'

const Test = styled.div`
  padding: 48px;
  background-color: blue;
  color: white;
`

const Home = ({ route }) => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state.global)

  console.log("route check", route)

  
  useEffect(() => {
    dispatch(fetchDataUsers())
  }, [])

  return (
    <Test>
      <ul>
        {users && users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>{`${user.name}`}</li>
          ))
        ) : (
          <li>No users</li>
        )}
      </ul>
    </Test>
  )
}

const loadData = (store) => {
  return store.dispatch(fetchDataUsers())
}

export default {
  component: Home,
  loadData: loadData,
}