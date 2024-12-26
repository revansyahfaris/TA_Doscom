// middlewares/validateProduct.js
const validateProduct = (req, res, next) => {
  const { name, description, price, stock } = req.body;

  if (!name || !description || !price || !stock) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }

  if (typeof stock !== 'number' || stock < 0) {
    return res.status(400).json({ error: 'Stock must be a non-negative number' });
  }

  next();
};

module.exports = validateProduct;
