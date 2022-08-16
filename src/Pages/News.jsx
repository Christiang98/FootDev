import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import CardChampions from "../components/PageNews/CardChampions/CardChampions"
import CardLibertadores from "../components/PageNews/CardLibertadores/CardLibertadores"
import CardInternational from "../components/PageNews/CardInternational/CardInternational"
import CardLocal from "../components/PageNews/CardLocal/CardLocal"
import Footer from '../components/Footer/Footer'

export const News = () => {
  return (
    <>
      <Navbar />
      <CardChampions />
      <CardLibertadores />
      <CardInternational />
      <CardLocal />
      <Footer />
    </>
  )
}
export default News
