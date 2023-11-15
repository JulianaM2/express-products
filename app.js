const express = require('express');
const app = express();
const morgan = require('morgan');
const indexRouter = require('./routes/index')
const productsRouter = require('./routes/products')

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', indexRouter);
app.use('/products', productsRouter);

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});