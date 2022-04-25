import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'

const hasToken = () => {
  const token = localStorage.getItem('token')
  return !!token
}

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={
          hasToken() ? <Home></Home> :
          <Login></Login>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRouter