import useForm from "../../hooks/useForm"
import { registerUserService } from "../../services/userServices"

export default function Signup() {
  // Paso 1: Crear un objeto con los valores iniciales 
  const datosPorDefecto = {
    first_name: '',
    last_name: '',
    gender: 'F',
    email: '',
    password: '',
    role: ''
  }

  // Paso 2: Crear una función que se va a ejecutar cuando haga click en botón "Regístrate"
  const enviarDatos = (datos) => {
    registerUserService(datos)
      .then((respuesta)=> console.log(respuesta.data))
      .catch((error)=> console.error(error.message))
  }

  // Paso 3: Usar mi custom hook de useForm (primero importarlo)
  const { formData, handleInputChange, handleSubmit } = useForm(datosPorDefecto, enviarDatos) 

  return (
    <div>
      <div className="form-container">
        <h1 className="form-container__title">Sign Up.</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form__form-group">
            <label htmlFor='first_name' className="form__form-group__label">Nombre</label>
            <input
              type='text'
              name='first_name'
              placeholder='Tu nombre'
              id='first_name'
              value={formData.first_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>


          <div className="form__form-group">
            <label htmlFor='last_name' className="form__form-group__label">Apellido</label>
            <input
              type='text'
              name='last_name'
              placeholder='Tu apellido'
              id='last_name'
              value={formData.last_name}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>


          <div className="form__form-group">
            <label htmlFor='email' className="form__form-group__label">Email</label>
            <input
              type='text'
              name='email'
              placeholder='correo@mail.com'
              id='email'
              value={formData.email}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>


          <div className="form__form-group">
            <label htmlFor='password' className="form__form-group__label">Password</label>
            <input
              type='password'
              name='password'
              id='password'
              value={formData.password}
              onChange={handleInputChange}
              className="form__form-group__input"
            />
          </div>


          <div className="form__form-group">
            <label htmlFor='role' className="form__form-group__label">Rol</label>
            <select name='role' id='role' value={formData.role} onChange={handleInputChange}>
              <option value=''>Elige un tipo de usuario</option>
              <option value='CUSTOMER'>Cliente</option>
              <option value='ADMIN'>Administrador</option>
            </select>
          </div>


          <div className="form__form-group">
            <button type='submit' className="form__form-group__button">
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}
