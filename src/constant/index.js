const MARCAS = [
    {id:1,nombre:"American"},
    {id:2,nombre:"European"},
    {id:3,nombre:"Asian"}
]

const thisYear = new Date().getFullYear()
const YEARS = Array.from(new Array(20), (v,i) => thisYear - i )

const PLANES = [
    {id:1,nombre:"Basic"},
    {id:2,nombre:"Full"}
]

export {
    MARCAS,
    YEARS,
    PLANES
}