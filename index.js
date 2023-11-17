const { application } = require("express")
const express = require("express")
const { request } = require("http")

const path = require("path")

const app = express()

const CaminhoBase = path.join(__dirname, "templates") 

app.use(express.urlencoded())

app.post('/cadastrar/salvar', (requisicao, resposta)=>{
    console.log(requisicao.body)
})

app.get('/cadastrar', (requisicao, resposta) =>{
    resposta.sendFile(`${CaminhoBase}/cadastro.html`)
})

app.get('/usuarios/:id' , (requisicao , resposta) =>{
    const id = requisicao.params.id
    
    console.log(`Acessando dados do usuario ${id}`)
    
    resposta.sendFile(`${CaminhoBase}/usuarios.html`)
})

app.get('/' , (requisicao,respota) =>{ 
    respota.sendFile(`${CaminhoBase}/index.html`)
})

app.listen(3000, () =>{
   console.log("servidor rodando na porta 3000!") 
})  