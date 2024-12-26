const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');
const validateOrder = require('../middlewares/validateOrder');

// Routes for Orders
router.post('/', createOrder); // Create Order
router.get('/', getOrders); // Get All Orders
router.get('/:id', getOrderById); // Get Order by ID
router.put('/:id', updateOrder); // Update Order
router.delete('/:id', deleteOrder); // Delete Order

module.exports = router;

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order for a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               total_amount:
 *                 type: number
 *                 format: float
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/', validateOrder, createOrder);

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Retrieve all orders
 *     responses:
 *       200:
 *         description: A list of orders
 */
router.get('/', getOrders);
