import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const Index = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/test' element={"uhuhuhaahay"} />
    </Routes>
  )
}

export default Index