import React from 'react'
import { makePut } from '../../services/axiosServices'

export const PruebaPut = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleData = async (event) => {
        event.preventDefault()
        const response = await makePut({
            username,
            password
        })
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
                    <input className='imputLogin' type="text" name='username' placeholder='Usuario' required value={username} onChange={handleUsernameChange} />
                    <input className='imputLogin' type="password" name='password' placeholder='Contraseña' required value={password} onChange={handlePasswordChange} />
                    <button id="buttonLogin" className='imputLogin' type='submit' onClick={handleData}>cambiar datos</button>
                </form>

            </>
        )
    }
