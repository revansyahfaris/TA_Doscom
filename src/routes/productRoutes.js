// routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');
const router = express.Router();

// Route untuk menambahkan produk
router.post('/', validateProduct, createProduct);

// Route untuk mendapatkan semua produk
router.get('/', getProducts);

// Route untuk mendapatkan produk berdasarkan ID
router.get('/:id', getProductById);

// Route untuk mengupdate produk
router.put('/:id', validateProduct, updateProduct);

// Route untuk menghapus produk
router.delete('/:id', deleteProduct);

module.exports = router;

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create new product
 *     description: Create a new product item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve list of products
 *     responses:
 *       200:
 *         description: List of products
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product details
 *       404:
 *         description: Product not found
 */
