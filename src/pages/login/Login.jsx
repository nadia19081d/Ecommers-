import { useState } from "react"
import { loginUserService } from "../../services/userServices"
import './Login.scss'

export default function Login() {
//Paso 2: Crear estados para guardar los valores del formulario
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [mostrarPassword, setMostrarPassword] = useState(false)

//Paso 4: Crear una función que se ejecutará cuando se envíe el formulario
const handleSubmit = (event) => {
    event.preventDefault()
    const datosEnviados = {
        email,
        password
    }
    loginUserService(datosEnviados)
        .then((response) => localStorage.setItem('token', response.data.token))
        .catch((error) => console.error(error.message))
    
    setEmail('')
    setPassword('')
}

//Paso 1: Crear formulario base
  return (
      <div className="form-container">
        <h1 className="form-container__title">Inicia tu sesión</h1>
        <form onSubmit={handleSubmit} className="form">
            {/*Paso 3: Guardar cada cambio de cada input en su estado correspondiente */}
            <div className="form__form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    placeholder="correo@mail.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className="form__form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type={mostrarPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(evento) => setPassword(evento.target.value)}
                />
                <button type="button" onClick={() => setMostrarPassword(!mostrarPassword)}>
                    {mostrarPassword ? 'ocultar' : 'mostrar'}
                </button>
            </div>

            <div className="form__form-group">
                <button type="submit">
                    Iniciar Sesión
                </button>
            </div>
        </form>
      </div>
  )
}
