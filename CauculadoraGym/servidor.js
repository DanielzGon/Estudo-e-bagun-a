// Importando os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configurando o EJS e especificando a pasta de views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

// Configurando o body-parser para lidar com os dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para lidar com o envio do formulário
app.post('/resultados', (req, res) => {

    var peso = req.body.peso;
    var pesoInteiro = parseInt(peso)
    var quantAgua = pesoInteiro * 35;
    var quantCreatina = parseFloat((pesoInteiro * 0.07).toFixed(1));
    var quantProteina = pesoInteiro * 1.8;


    res.render('resultados', { quantAgua, quantCreatina, quantProteina });
});

// Iniciando o servidor
app.listen(4444, () => {
    console.log('Servidor rodando na porta 4444');
});
