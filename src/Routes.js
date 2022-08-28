import { Route, Routes } from 'react-router-dom'
import Home, { loadData } from './components/Home'

const Index = () => {
  return (
    <Routes>
      {ListRoutes.map((route) => (
        <Route exact={route.exact} path={route.path} element={route.element} />
      )) }
      <Route path='/test' element={"uhuhuhaahay"} />
    </Routes>
  )
}

export const ListRoutes = [
  {
    loadData: loadData,
    path: '/',
    element: <Home />,
    exact: true,
  },
  {
    path: '/test',
    element: "test",
  },
]

export default Index