const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const validateCategory = require('../middlewares/validateCategory');

// Routes for Categories
router.post('/', createCategory); // Create Category
router.get('/', getCategories); // Get All Categories
router.get('/:id', getCategoryById); // Get Category by ID
router.put('/:id', updateCategory); // Update Category
router.delete('/:id', deleteCategory); // Delete Category

module.exports = router;

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category
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
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/', validateCategory, createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve all categories
 *     responses:
 *       200:
 *         description: A list of categories
 */
router.get('/', getCategories);

