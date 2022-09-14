import { renderRoutes} from 'react-router-config'
import App from './pages/MainApp'
import Home from './pages/Home'
import LoginApp from './pages/LoginApp'

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
    ]
  }
]

export default Index