import { useEffect } from "react"

const App = () => {
  const fetchDataUsers = async (page) => {
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=4&seed=abc`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    fetchDataUsers()
  }, [])

  return (
    <div>Hello World tetste100</div>
  )
}

export default App