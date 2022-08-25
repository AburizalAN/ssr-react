import { useEffect } from "react"
import styled from 'styled-components'
import Routes from "./Routes"
import { fetchDataUsers } from './store/global/actions'
import { useDispatch } from "react-redux"

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px;
// `

// const GridItem = styled.div`
//   padding: 16px;
//   border: 1px solid #ccc;
// `

const App = ({ serverData }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDataUsers())
  }, [])

  return (
    <GridContainer>
      <Routes />
    </GridContainer>
  )
}

export default App