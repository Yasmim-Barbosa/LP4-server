const express = require('express');
const bodyParser = require('body-parser');
const veiculoRoutes = require('./routes/veiculo');

const app = express();
const PORT = 8080;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});


app.use('/veiculo', veiculoRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});