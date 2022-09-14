import { renderRoutes } from 'react-router-config'

export const MainApp = ({ route }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: MainApp,
  loadData: () => {},
  exact: true,
}