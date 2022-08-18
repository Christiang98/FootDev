import React from 'react'
import { useState } from 'react'
import axios from "axios"


export const PruebaPut = () => {
    const [infomation, setInfomation] = useState([])
    const [user, setUser] = useState("")
    const[username,setUserName]=useState("")
    const[password,setPassword]=useState("")



    const saveData = () => {
        axios.get(`http://localhost:5000/api/people/${user}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
            },
        })
            .then(res => setInfomation(res.data))
            .catch((err) => err.response.data);
    }

    let usuarioLocal = JSON.parse(localStorage.getItem("username"))
    let usuarioData = infomation.filter(element => element.username === usuarioLocal)
    let usuarioId = usuarioData[0].id

   const switchData = () => {
     axios.put(`http://localhost:5000/api/people/${usuarioId}`,{
        headers: {
            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
        },
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
    }
  
    const handlePut = async (event) => {
        event.preventDefault()
        const response = await switchData({
          username,
          password
        })
        if(response.send==="Data successful updated"){
            alert("vamos")
        }else{
            alert("la cagamos")
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
        <form className='containerFormPut'>
            <input className='imputLogin' type="text" name='username' placeholder='Usuario'  value={username} onChange={handleUsernameChange} required />
            <input className='imputLogin' type="password" name='password' placeholder='Contraseña' value={password} onChange={handlePasswordChange} required />
            <button id="buttonLogin" className='imputLogin' type='submit' onClick={handlePut}>cambiar datos</button>
        </form>


    </>
)
}
export default PruebaPut