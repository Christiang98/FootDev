import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export const PruebaPut = () => {
    const [user, setUser] = useState("")
    const [infomation, setInfomation] = useState({})


    const saveData = () => {
        axios.get(`http://localhost:5000/api/people/${user}`)
            .then(res => setInfomation(res.data))
        
    }
    console.log(infomation)
    const switchData = () => {
    const userId =infomation._id;
        axios.put(`http://localhost:5000/api/people/${userId}`)
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
console.log(userId)
    }




    // const handleUsernameChange = (event) => {
    //             setUserName(() => event.target.value)
    //         }

    //         const handlePasswordChange = (event) => {
    //             setPassword(() => event.target.value)
    //         }
    return (
        <>
            <form className='containerFormPut'>
                <input className='imputLogin' type="text" name='username' placeholder='Usuario' required />
                <input className='imputLogin' type="password" name='password' placeholder='Contraseña' required />
                <button id="buttonLogin" className='imputLogin' type='submit' onClick={saveData}>cambiar datos</button>
            </form>
            <button onClick={switchData}>gola</button>

        </>
    )
}
export default PruebaPut