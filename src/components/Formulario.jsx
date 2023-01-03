import { MARCAS,YEARS, PLANES } from "../constant"
import { useContext } from "react"
import CotizadorContext from "../context/CotizadorProvider"





function Formulario() {

    const {handleChange,handleSubmit,error} = useContext(CotizadorContext)
    

  return (
    <form id="Formulario" onSubmit={e => handleSubmit(e)}>
        {error && <div id="Error"><p>Complete all fields</p></div>}
        <div className="box">
            <label htmlFor="">Brand</label>
            <select name="marca" id="" onChange={e => handleChange(e)}>
                <option value="">-- Select Brand --</option>
                {
                    MARCAS.map(marca => {
                        const {id,nombre} = marca
                        return (
                            <option key={id} value={nombre}>{nombre}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="box">
            <label htmlFor="">Year</label>
            <select name="year" id="" onChange={e => handleChange(e)}>
                <option value="">-- Select Year of The Car --</option>
                {
                    YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))
                }
            </select>
        </div>
        <div className="box">
            <label htmlFor="">Plan</label>
            <div className="ratio">
                {
                    PLANES.map(plan => {
                        const {id,nombre} = plan
                        return (
                            <div key={id}>
                                <label htmlFor={nombre}>{nombre}</label>
                                <input onChange={e => handleChange(e)} id={nombre} type="radio" name="plan" value={nombre} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <input type="submit" id="Submit" value="Check" />
    </form>
  )
}

export default Formulario