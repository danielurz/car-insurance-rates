import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import { useContext } from 'react'
import CotizadorContext from '../context/CotizadorProvider'


function AppSeguro() {

    const {resultado} = useContext(CotizadorContext)

  return (
    <div id="App">
        <header id="Header">
            <h1>Car insurance quote calculator</h1>
        </header>
        <main id="Main">
            <Formulario/>
            {resultado && <Resultado/>}
        </main>
    </div>
  )
}

export default AppSeguro