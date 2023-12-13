// REGLAS PARA CREAR UN HOOK DE REACT
// 1. El nombre de la funcion debe comenzar con la palabra "use".
// 2. Un custom hook, es una función que utiliza otros hooks de react.
// 3. Los hooks deben ser funciones
// 4. Los hooks deben ser reutilizables, no para casos muy específicos
// 5. Deben retornar algo, un valor, un objeto, un array, funciones, etc

import { useState } from "react"



function useForm (defaultData, callback) {
    //Estado unico para guardar los datos de mi formulario en un objeto
    const [formData, setFormData] = useState(defaultData)
    // defaultData (valores por defecto) va a ser un objeto con los campos de mi form y su valor inicial

    // Funcion que maneja el registro del formulario
    const handleSubmit = (event) => {
        event.preventDefault()
        callback(formData)
        setFormData(defaultData)
    }

    // Funcion que maneja los cambios en cada input
    const handleInputChange = (event) => {
        const { name, value } = event.target
        // console.log(name, value)
        setFormData({...formData, [name]: value})
    }

    /*
    formData = {
        [name]: value

        nombre: 'Daniel',
        apellido: '',
        email: 'daniel@mail.com',
        password: '',
        role: ''
    }
    */

    return {
        formData,
        handleSubmit,
        handleInputChange
    }
}

export default useForm