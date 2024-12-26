// controllers/productController.js
const prisma = require('../prismaClient');

// Create product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        description,
        price,
        stock,
      },
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
