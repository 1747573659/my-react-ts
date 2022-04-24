import { HashRouter, Route } from 'react-router-dom'
import Login from '../components/Login/Login'


const IndexRouter = () => {
  return (
    <HashRouter>
      <Route path="/login" element={Login} />
    </HashRouter>
  )
}

export default IndexRouter