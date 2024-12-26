const express = require('express');
const router = express.Router();
const {
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
} = require('../controllers/order_itemsController');
const validateOrder_Item = require('../middlewares/validateOrder_item');

// Routes for Order Items
router.post('/', createOrderItem); // Create Order Item
router.get('/', getOrderItems); // Get All Order Items
router.get('/:id', getOrderItemById); // Get Order Item by ID
router.put('/:id', updateOrderItem); // Update Order Item
router.delete('/:id', deleteOrderItem); // Delete Order Item

module.exports = router;

/**
 * @swagger
 * /order-items:
 *   post:
 *     summary: Create a new order item
 *     description: Create a new order item for a specific order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Order Item created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/', validateOrder_Item, createOrderItem);

/**
 * @swagger
 * /order-items:
 *   get:
 *     summary: Get all order items
 *     description: Retrieve all order items
 *     responses:
 *       200:
 *         description: A list of order items
 */
router.get('/', getOrderItems);

