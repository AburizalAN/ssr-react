import { renderRoutes} from 'react-router-config'
import App from './pages/MainApp'
import Home from './pages/Home'
import LoginApp from './pages/LoginApp'
import NotFound from  './pages/404'

const Index = () => {
  return renderRoutes(listRoutes)
}

export const listRoutes = [
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
      {
        ...NotFound,
      }
    ]
  },
]

export default Index