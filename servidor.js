const express = require("express");

const app = express()

let ALUNOS = [
    {id: 1, nome: "Bernador", curso: "Desenvolvimento de sistema"},
    {id: 2, nome: "Camily", curso: "Redes de computadores"},
    {id: 3, nome: "Kaue", curso: "Banco de dasdos"},
    {id: 4, nome: "Maria", curso: "administração"},
    {id: 5, nome: "Marjory", curso: "Desenvolvimento de sistema"},
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "API alunos funcionando"
    })
})

app.get("/alunos",(req, res) =>{
    res.json(ALUNOS);
})
const PORTA = 3000;

app.listen(PORTA, () => {
    console.log("Servidor iniciado com suceso")
    console.log(`http://localhost:${PORTA}`)
})