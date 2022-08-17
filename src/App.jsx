import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import News from "./Pages/News"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Teams from './Pages/Teams'
import './App.css'
import { Feedback } from './Pages/Feedback'




function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='news' element={<News />} />
        <Route path='feedback' element={<Feedback/>} />
        <Route path='register' element={<Register/>} />
        <Route path="login" element={<Login />} />
        <Route path="teams" element={<Teams/>} />
      </Routes>
    </>
  )
}
 
export default App
