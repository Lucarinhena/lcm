const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/routes');
const path = require ('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'seu_segredo_de_sessao',
  resave: true,
  saveUninitialized: true
}));

// Configurações do Passport (se estiver usando autenticação)
app.use(passport.initialize());
app.use(passport.session());

// Conectar ao MongoDB usando Mongoose
// mongoose.connect('sua_string_de_conexao_mongodb', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuração da Sessão


// Configurações do Express para servir arquivos estáticos
app.use(express.static('public'));

// Configuração do EJS como mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Adicione esta linha para indicar o diretório de views

// Configuração de rotas
app.use('/', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
