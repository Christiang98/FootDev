import React, { useState } from 'react'
import "./FormRegister.css"
import { useNavigate } from "react-router-dom";
import { userRegister } from '../../../services/axiosServices'
import Logo from "../../../assets/img/Logo.png"
import swal from 'sweetalert'

export const FormRegister = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUserName] = useState("")
  const [myClub, setMyClub] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [youRegistered, setYouRegistered] = useState(false)
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault()
    const response = await userRegister({
      firstName,
      lastName,
      username,
      myClub,
      email,
      password
    })
    setYouRegistered(() => true)
    if (firstName === "" || lastName === "" || username === "" || myClub === "" || email === "" || password === "") {
      swal({
        title: "Error",
        text: "Por favor completa todos los campos",
        icon: "warning",
      })
    } else {
      navigate("/login")
    }
  }

  const handleFirstNameChange = (event) => {
    setFirstName(() => event.target.value)
  }
  const handleLastNameChange = (event) => {
    setLastName(() => event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUserName(() => event.target.value)
  }
  const handleMyClubChange = (event) => {
    setMyClub(() => event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(() => event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(() => event.target.value)
  }
  return (
    <>
      <div className='containerPageRegister'>
        <div className='logoRegister'>
          <img className='imgLogo' src={Logo} />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleRegister'>Registrate</h1>
        <p className='infoRegister'>Registrate para poder disfrutar de todo nuestro contenido</p>
        <form className='containerForm'>
          <input className='imputRegister' type="text" name='name' placeholder='Nombre' required value={firstName} onChange={handleFirstNameChange} />
          <input className='imputRegister' type="text" name='lastName' placeholder='Apellido' required value={lastName} onChange={handleLastNameChange} />
          <input className='imputRegister' type="text" name='username' placeholder='Usuario' required value={username} onChange={handleUsernameChange} />
          <input className='imputRegister' type="text" name='myClub' placeholder='Tu club' required value={myClub} onChange={handleMyClubChange} />
          <input className='imputRegister' type="email" name='email' placeholder='Email' required value={email} onChange={handleEmailChange} />
          <input className='imputRegister' type="password" name='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} />
          <button id="buttonRegister" className='imputRegister' type='submit' onClick={handleRegister}>Registrarse</button>
        </form>
      </div>
    </>
  )
}