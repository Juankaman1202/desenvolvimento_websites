const { application } = require("express")
const express = require("express")
application.get('/' , (requisicao,respota) =>{ 
    respota.send("ESTOU FUNCIONANDO COM O EXPRESS")
})

application.listen(3000, () =>{
   console.log("servidor rodando na porta 3000!") 
})