import { useRoutes } from 'react-router-dom'
import routes from './routes'
// import AuthProvider from './AuthProvider'

const hasToken = () => {
  const token = localStorage.getItem('token')
  return !!token
}

const IndexRouter = () => {
  const showRoutes = useRoutes(routes)
  return (
    // <AuthProvider>
    <>
      {showRoutes}
    </>
    // </AuthProvider>
  )
}

export default IndexRouter
