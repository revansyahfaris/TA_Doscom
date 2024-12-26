const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

module.exports = app;

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const product_categoriesRoutes = require('./routes/product_categoriesRoutes');
app.use('/product-categories', product_categoriesRoutes);

const categoryRoutes = require('./routes/categoryRoutes');
app.use('/categories', categoryRoutes);

const order_itemsRoutes = require('./routes/order_itemsRoutes');
app.use('/order-items', order_itemsRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/payments', paymentRoutes);

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TA Doscom API",
      version: "1.0.0",
      description: "API for CRUD operations"
    }
  },
  apis: ["./src/routes/*.js"] // Direktori yang berisi file routes
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


