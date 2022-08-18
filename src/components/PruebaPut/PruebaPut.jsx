import React from 'react'
import { useState } from 'react'
import axios from "axios"


export const PruebaPut = () => {
    const [infomation, setInfomation] = useState([])
    const [user, setUser] = useState("")
    const[username,setUserName]=useState("")
    const[password,setPassword]=useState("")


    const saveData = () => {
        axios.get(`http://localhost:5000/api/people/${user}`)
            .then(res => setInfomation(res.data))
        console.log(infomation);
    }
    let usuarioLocal = JSON.parse(localStorage.getItem("username"))
    let usuarioData = infomation.filter(element => element.username == usuarioLocal)
    let usuarioId = usuarioData[0]._id;

    const handleUsernameChange = (event) => {
        setUserName(() => event.target.value)
      }
    
      const handlePasswordChange = (event) => {
        setPassword(() => event.target.value)
      }
     
   
   
    const hacerPUT =()=>{
    axios.put(`http://localhost:5000/api/people/${usuarioId}`)
    headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
    }
    body:{
        username,
        password
    }
}

return (
        <>
            <form className='containerFormPut'>
                <input className='imputLogin' type="text" name='username' placeholder='Usuario' value={username} onChange={handleUsernameChange} required />
                <input className='imputLogin' type="password" name='password' placeholder='Contraseña' value={password} onChange={handlePasswordChange} required />
                <button id="buttonLogin" className='imputLogin' type='submit' onClick={saveData}>cambiar datos</button>
            </form>


        </>
    )
}
export default PruebaPut