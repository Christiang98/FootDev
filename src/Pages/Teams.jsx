import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import CardsTeams from '../components/PageTeams/CardsTeams/CardsTeams'
import SecondCards from '../components/PageTeams/SecondCards/SecondCards'
import ThirdCards from '../components/PageTeams/ThirdCards/ThirdCards'
import FourthCards from"../components/PageTeams/FourthCards/FourthCards"
import Footer from "../components/Footer/Footer"


export const Teams = () => {
  return (
    <>
    <Navbar/>
    <CardsTeams/>
    <SecondCards/>
    <ThirdCards/>
    <FourthCards/>
    <Footer/>
   
    </>
  )
}
export default Teams