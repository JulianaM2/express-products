import express, { urlencoded, json } from 'express';
import morgan from 'morgan';
import indexRouter from './src/routes/index.js';
import productsRouter from './src/routes/products.js';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});