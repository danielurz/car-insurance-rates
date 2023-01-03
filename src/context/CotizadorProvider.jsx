import {createContext, useState} from 'react'

const CotizadorContext = createContext()

function CotizadorProvider({children}) {

    const [datos, setDatos] = useState({})
    const [error, setError] = useState(false)
    const [resultado, setResultado] = useState(false)
    const [respuesta, setRespuesta] = useState(0)



    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizacion = () => {
        let base = 2000

        //Restar 3% por año
        const thisYear = new Date().getFullYear()
        const diff = thisYear - datos.year
        const porcentaje = (100 - (diff * 3)) / 100

        base *= porcentaje


        // Europeo 30%
        if (datos.marca === "European") {
            base *= 1.3
        }
        // Americano 15%
        else if (datos.marca === "American") {
            base *= 1.15
        }
        // Asiatico 5%
        else if (datos.marca === "Asian") {
            base *= 1.05
        }


        // Basico 20%
        if (datos.plan === "Basic") {
            base *= 1.2
        }
        // Completo 50%
        else if (datos.plan === "Basic") {
            base *= 1.5
        }


        setRespuesta(+base.toFixed(2))
    }


    const handleSubmit = e => {
        e.preventDefault()

        const VALOR = Object.values(datos)

        if (VALOR.length !== 3 || VALOR.includes("")) {
            setError(true)
            setResultado(false)
            
            setTimeout(() => {
                setError(false)
            }, 3000);
            return
        }

        setError(false)
        setResultado(true)

        cotizacion()
    }






  return (
    <CotizadorContext.Provider value={{
        handleChange,
        handleSubmit,
        error,
        resultado,
        datos,
        respuesta
    }}>
        {children}
    </CotizadorContext.Provider>
  )
}

export {
    CotizadorProvider
}

export default CotizadorContext