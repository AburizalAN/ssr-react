import { renderMatches, matchRoutes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import LoginApp from './pages/LoginApp'

const Index = () => {
  const location = useLocation()
  let matches = matchRoutes(ListRoutes, location.pathname)
  return renderMatches(matches)
}

export const ListRoutes = [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...LoginApp,
    path: '/login',
  },
]

export default Index