// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
import "./FormFeedback.css"
// import { userFeedback } from '../../services/axiosServices';



// export const FormFeedback = () => {
//   const [username, setUserName] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLogged, setIsLogged] = useState(false)
//   const [token, setToken] = useState("")
//   const navigate = useNavigate();

//   const handleFeedback = async (event) => {
//     event.preventDefault()
//     const response = await userFeedback({
//       username,
//       password
//     })
//     if (response.status === "OK" && username != "" && password != "") {
//       setIsLogged(() => true)
//       setToken(() => response.token)
//       localStorage.setItem("token", JSON.stringify(token))
//       swal({
//         title: "Entraste a la pagina",
//         text: "clave",
//         icon: "success",
//       })
//       // navigate("/news")
//     } else if (username === "" || password === "") {
//       swal({
//         title: "Error",
//         text: "Completa todos los campos",
//         icon: "warning",
//       })
//     }
//     else {
//       swal({
//         title: "Error",
//         text: "Usuario o contraseña incorrectos",
//         icon: "warning",
//       })
//     }
//   }
//   const handleUsernameChange = (event) => {
//     setUserName(() => event.target.value)
//   }

//   const handlePasswordChange = (event) => {
//     setPassword(() => event.target.value)
//   }
export const FormFeedback = () => {
  return (
    <>
      <div>
        <div className='logoFeedback'>
          <img className='imgLogo' src="https://i.postimg.cc/jqH6qFZx/ballch.png" />
          <h3 className='titleLogo'>FootDev</h3>
        </div>
        <h1 className='titleFeedback'>Necesitamos tu Feedback</h1>
        <h2 className="text">¿Encontraste un error? ¿Tenes una sugerencia? Nos interesa tu opinion, por favor dejalas en este formulario asi podemos mejorar!</h2>
        <form className="containerFormFeedback">
          <input className="inputFeedback" type="text" placeholder="Opinion" />
          <button className="summitFeedback" type="summit">Enviar</button>

        </form>
        {/* {isLogged ? (
          <p>Este es tu {token}</p>
        ) : (
          <form className='containerFormFeedback'>
            <input className='imputFeedback' type="text" name='username' placeholder='Usuario' required value={username} onChange={handleUsernameChange} />
            <input className='imputFeedback' type="password" name='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} />
            <button id="buttonFeedback" className='imputFeedback' type='submit' onClick={handleFeedback}>Ingresa</button>
          </form>)} */}
      </div>
    </>
  )
}

export default FormFeedback