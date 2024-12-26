// controllers/productCategoryController.js
const prisma = require('../prismaClient');

// Create a product with categories
const createProductWithCategories = async (req, res) => {
  const { name, description, price, stock, categoryIds } = req.body;

  try {
    // Create product
    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        stock,
        categories: {
          connect: categoryIds.map(id => ({ id }))
        }
      }
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products with categories
const getProductsWithCategories = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        categories: true
      }
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all categories for a product
const getCategoriesForProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: {
        categories: true
      }
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product.categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProductWithCategories, getProductsWithCategories, getCategoriesForProduct };
