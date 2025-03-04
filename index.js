const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');


// apply logger middleware globally
app.use(logger);
app.use('/users', userRoutes);
app.use('/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));