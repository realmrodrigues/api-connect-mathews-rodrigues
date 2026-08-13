const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const usersRoutes = require('./routes/users.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Connect - Gerenciamento de Usuários está online!',
    version: '1.0.0'
  });
});

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});