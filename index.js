const { application } = require("express")
const express = require("express")

const path = require("path")

const app = express()

const CaminhoBase = path.join(__dirname, "templates") 

application.get('/' , (requisicao,respota) =>{ 
    respota.sendFile(`${CaminhoBase}/index.html`)
})

application.listen(3000, () =>{
   console.log("servidor rodando na porta 3000!") 
})  