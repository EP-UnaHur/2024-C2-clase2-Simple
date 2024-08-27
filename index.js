const express = require('express')
const paises = require('./data/paises.json')
const app = express()

app.get('/Saludo', (req, res) => {
    res.send('<h1>Hola mundo!!!</h1>')
})


app.use("/paises", (req, res)=> {
    res.status(200).json(
        paises.filter( p => p.subregion==='South America')
        .map((p) => {
            return {
              nombre: p.name.common, poblacion: p.population
            }
          })
    )
} )



app.listen(3001, ()=>{
    console.log("La aplicacion esta ready")
})

