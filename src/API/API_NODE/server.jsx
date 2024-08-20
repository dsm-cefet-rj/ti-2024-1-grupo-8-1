const app = require('./app.jsx');
require('dotenv').config();
PORT = process.env.PORT || 27017;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});