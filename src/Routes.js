import { renderMatches, matchRoutes, useLocation } from 'react-router-dom'
import App from './pages/MainApp'
import Home from './pages/Home'
import LoginApp from './pages/LoginApp'

const Index = () => {
  const location = useLocation()
  let matches = matchRoutes(ListRoutes, location.pathname)
  return renderMatches(matches)
}

export const ListRoutes = [
  {
    ...App,
    routes: [
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
  },
]

export default Index