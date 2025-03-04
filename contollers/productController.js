const getAllProducts = (req, res) => {
    res.send('Retrieve all products');
};

const getProductById = (req, res) => {
    res.send(`Retrieve product with ID: ${req.params.id}`);
};

const createProduct = (req, res) => {
    res.send('Create a new product');
};

const updateProduct = (req, res) => {
    res.send(`Update product with ID: ${req.params.id}`);
};

const deleteProduct = (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
