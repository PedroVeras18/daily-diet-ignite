const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
})