// routes/productCategoryRoutes.js
const express = require('express');
const { createProductWithCategories, getProductsWithCategories, getCategoriesForProduct } = require('../controllers/product_categoriesController');
const router = express.Router();

// Route untuk membuat produk dengan kategori
router.post('/', createProductWithCategories);

// Route untuk mendapatkan semua produk dengan kategori
router.get('/', getProductsWithCategories);

// Route untuk mendapatkan kategori dari produk tertentu
router.get('/:id/categories', getCategoriesForProduct);

module.exports = router;

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create new category
 *     description: Create a new product category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               parent_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', validateCategory, createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve list of product categories
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get('/', getCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category details
 *       404:
 *         description: Category not found
 */
router.get('/:id', getCategoryById);