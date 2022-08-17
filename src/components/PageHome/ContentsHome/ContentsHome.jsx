import React from 'react'
import "./ContentsHome.css"
import Logo from "../../../assets/img/Logo.png"
import champions from "../../../assets/img/champions.png"
import libertadores from "../../../assets/img/libertadores.png"
import futbolInternacional from "../../../assets/img/fifa.png"
import futbolNacional from "../../../assets/img/futbolNacional.png"
import { NavLink } from 'react-router-dom'


export const ContentsHome = () => {
    return (
        <>
        <div className='containerHome'>
            <h1 className='sectionInicio'>Bienvenidos a Footdev  </h1>
            <div className='containerLogoPageHome'>
                <img src={Logo} className="logoPageHome" />
            </div>
            <h3 className="sectionSubtitle"> Para todos los amantes del futbol les traemos la imformacion  y las mejores noticias de todas las ligas profesionales,
                ligas internacionales y ligas locales ..
                Mas una seccion en la que veras a los mejores equipos.</h3>
            <div className="containerIcons">
                <img className='iconChampions' src={champions}/>
                <img className='iconLibertadores' src={libertadores} />
                <img className='iconInternational' src={futbolInternacional}/>
                <img className='iconLocal' src={futbolNacional} />
            </div>
            <div className="containerButtons">
               <NavLink to="/register"><button className="ButtonHomeRegister"> Registrate</button></NavLink>
               <NavLink to="/login"><button className="ButtonHomeLogin">login</button></NavLink>
            </div>
        </div>
        </>
    )
}
export default ContentsHome