const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const validateProductCategory = async (req, res, next) => {
  const { product_id, category_id } = req.body;

  // Memeriksa apakah product_id dan category_id ada di database
  if (!product_id || !category_id) {
    return res.status(400).json({ error: 'product_id and category_id are required' });
  }

  try {
    // Memastikan product_id valid
    const productExists = await prisma.products.findUnique({
      where: { id: product_id },
    });
    if (!productExists) {
      return res.status(404).json({ error: `Product with ID ${product_id} not found` });
    }

    // Memastikan category_id valid
    const categoryExists = await prisma.categories.findUnique({
      where: { id: category_id },
    });
    if (!categoryExists) {
      return res.status(404).json({ error: `Category with ID ${category_id} not found` });
    }

    // Jika semua validasi lolos, lanjutkan ke controller
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to validate Product_Category' });
  }
};

module.exports = validateProductCategory;
