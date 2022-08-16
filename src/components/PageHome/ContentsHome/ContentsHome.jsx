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
            <h3 className="sectionSubtitle"> Para todos los amantes del football les traemos la imformacion  y las mejores noticias de todas las ligas profesionales,
                ligas internacionales , ligas europeas y ligas locales ..
                Mas una seccion para armar tu equipo</h3>
            <div className="containerIcons">
                <img className='iconChampions' src={champions}/>
                <img className='iconLibertadores' src={libertadores} />
                <img className='iconInternational' src={futbolInternacional}/>
                <img className='iconLocal' src={futbolNacional} />
            </div>
            <div className="containerButton">
               <NavLink to="/register"><button className="PageButton"> Registrate</button></NavLink>
            </div>
        </div>
        </>
    )
}
export default ContentsHome