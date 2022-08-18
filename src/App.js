import { useEffect } from "react"
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`

const GridItem = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
`

const App = ({ serverData }) => {
  // const fetchDataUsers = async (page) => {
  //   const response = await fetch(`https://randomuser.me/api/?page=${page}&results=4&seed=abc`)
  //   const data = await response.json()
  //   console.log(data)
  // }

  useEffect(() => {
    // fetchDataUsers()
  }, [])

  return (
    <GridContainer>
      <GridItem>test satu dua</GridItem>
    </GridContainer>
  )
}

export default App