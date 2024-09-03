const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router.jsx'); 
const conn = require('./connection.jsx')
const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(bodyParser.json());

conn();
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
