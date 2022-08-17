import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./Navbar.css"
import { Tab, Tabs } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from "../../assets/img/Logo.png"
import { teal } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";




export default function Navbar() {
    const navigate = useNavigate();
    
    const exitPage = () => {
        localStorage.clear() 
        navigate("/")
    }
    return (
        <AppBar style={{ backgroundColor: "#2A9D8F", color: "white", height: "85px" }}>
            <Toolbar>
                <Typography >
                    <img className='iconNavbar' src={Logo} />
                </Typography>
                <h1 className='textNavbar'>Footdev</h1>
                <Tabs className='menuNavbar'>
                    <NavLink to="/" className="navLink"><Tab style={{ color: "white", fontSize: "30px" }} label="Inicio" /></NavLink>
                    <NavLink to="/news" className="navLink"><Tab style={{ color: "white", fontSize: "30px" }} label="Noticias" /></NavLink>
                    <NavLink to="/feedback" className="navLink"><Tab style={{ color: "white", fontSize: "30px" }} label="Contacto" /></NavLink>
                    <NavLink to="/teams" className="navLink"><Tab style={{ color: "white", fontSize: "30px" }} label="Equipos" /></NavLink>
                </Tabs>
                <Button sx={{ bgcolor: teal[800], color: "white", marginLeft: 30, padding: 2, width: 120, borderRadius: 5, fontSize: 20 }}onClick={exitPage}>salir</Button>
            </Toolbar>
        </AppBar>

    );
}