const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server on");
});

app.listen (port, ()=> {
    console.log(`Servidor rodando na porta ${port}`)
})