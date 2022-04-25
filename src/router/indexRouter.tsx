import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'

const getMyToken = () => {}

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default IndexRouter