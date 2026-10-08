const express = require('express');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;

app.use('/users', usersRouter);
app.use('/card', cardsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Requested resource not found',
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
