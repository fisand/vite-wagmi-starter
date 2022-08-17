import { useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'

import routes from '~react-pages'

function Redirect({ to }: { to: string }) {
  let navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [navigate, to])
  return null
}

function App() {
  return <>{useRoutes([...routes, { path: '*', element: <Redirect to="/" /> }])}</>
}

export default App
