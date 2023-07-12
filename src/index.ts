import express from 'express';
const routes = require('./users').default;
const routesProduct = require('./product');




const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);
app.use('/api', routesProduct);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
module.exports = app;