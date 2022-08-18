import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import FormFeedback from "../components/PageFeedback/FormFeedback"
import Footer from "../components/Footer/Footer"
import PruebaPut from '../components/PruebaPut/PruebaPut'

export const Feedback = () => {
  return (
    <>
    <Navbar/>
    <FormFeedback/>
    <PruebaPut/>
    <Footer/>
    </>
  )
}
