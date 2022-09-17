import { Helmet } from "react-helmet"

const App = ({ routes }) => {
  return (
    <div>
      <Helmet>
        <title>Hello this is uhuy</title>
        <meta property="og:title" content="Hello this is uhuy" />
      </Helmet>
      {routes()}
    </div>
  )
}

export default App