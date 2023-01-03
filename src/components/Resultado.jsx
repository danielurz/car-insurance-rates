import { useContext,useCallback } from "react"
import CotizadorContext from "../context/CotizadorProvider"


function Resultado() {

    const {datos,respuesta} = useContext(CotizadorContext)
    const {marca,plan,year} = datos

  return (
    <div id="Result">
        <h3 className="title">Result</h3>
        <div className="respuesta">
            <p><span>BRAND:</span> {useCallback(marca,[respuesta])}</p>
            <p><span>PLAN:</span> {useCallback(plan,[respuesta])}</p>
            <p><span>YEAR:</span> {useCallback(year,[respuesta])}</p>
            <p id="quote"><span>iNSURANCE QUOTE: </span>${respuesta}</p>
        </div>
    </div>
  )
}

export default Resultado