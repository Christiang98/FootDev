import React from 'react'
import ContentsHome from '../components/PageHome/ContentsHome/ContentsHome'
import Footer from "../components/Footer/Footer"
import Register from '../Pages/Register'
import { Route, Routes } from 'react-router-dom'
export const Home = () => {
    return (
        <div className='containerHome'>
            <ContentsHome />
            <Footer />
            <Routes>
            <Route path='/register' element={<Register/>} />
            </Routes>
        </div>
    )
}
export default Home