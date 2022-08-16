import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./FormLogin.css"
import { userLogin } from '../../services/axiosServices';
import { Token } from '@mui/icons-material';


export const FormLogin = () => {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState("")
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault()
    const response = await userLogin({
      username,
      password
    })
    if (response.status === "OK" && username != "" && password != "") {
      setIsLogged(() => true)
      //setToken(() => response.token)
      localStorage.setItem("token",JSON.stringify(response.token))
      swal({
        title: "Entraste a la pagina",
        text: "clave",
        icon: "success",
      })
      navigate("/news")
    } else if (username === "" || password === "") {
      swal({
        title: "Error",
        text: "Completa todos los campos",
        icon: "warning",
      })
    }
    else {
      swal({
        title: "Error",
        text: "Usuario o contraseña incorrectos",
        icon: "warning",
      })
    }
  }
  const handleUsernameChange = (event) => {
    setUserName(() => event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(() => event.target.value)
  }

  return (
    <>
      <div>
        <div className='logoLogin'>
          <img className='imgLogo' src="https://i.postimg.cc/jqH6qFZx/ballch.png" />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleLogin'>Iniciar sesion</h1>
        {isLogged ? (
          <p>Este es tu {token}</p>
          ) : (
          <form className='containerFormLogin'>
            <input className='imputLogin' type="text" name='username' placeholder='Usuario' required value={username} onChange={handleUsernameChange} />
            <input className='imputLogin' type="password" name='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} />
            <button id="buttonLogin" className='imputLogin' type='submit' onClick={handleLogin}>Ingresa</button>
          </form>)}
      </div>
    </>
  )
}

export default FormLogin