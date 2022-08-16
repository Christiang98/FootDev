import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Navbar.css"
import { Tab, Tabs } from '@mui/material';
import { NavLink , Link} from 'react-router-dom';
import Logo from "../../assets/img/Logo.png"


export default function Navbar() {
    return (
        <AppBar style={{backgroundColor:"#2A9D8F",color:"white",height:"85px"}}>
            <Toolbar>
                    <Typography >
                        <img className='iconNavbar' src={Logo}/>
                    </Typography>
                    <h1 className='textNavbar'>Footdev</h1>
                    <Tabs className='menuNavbar'>
                        <NavLink to="/"><Tab style={{color:"white",fontSize:"30px"}}  label="Inicio"/></NavLink>
                       <NavLink to="/news"><Tab  style={{color:"white",fontSize:"30px"}}label="Noticias"/></NavLink>
                       <NavLink to="/myClub"><Tab  style={{color:"white",fontSize:"30px"}}label="Tu Club"/></NavLink>
                        <NavLink to="/teams"><Tab  style={{color:"white",fontSize:"30px"}}label="Equipos"/></NavLink>
                    </Tabs>
                    </Toolbar>
              </AppBar>
        
    );
}