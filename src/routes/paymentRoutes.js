const express = require('express');
const router = express.Router();
const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require('../controllers/paymentController');
// const validatePayment = require('../middlewares/validatePayment');

// Routes for Payments
router.post('/', createPayment); // Create Payment
router.get('/', getPayments); // Get All Payments
router.get('/:id', getPaymentById); // Get Payment by ID
router.put('/:id', updatePayment); // Update Payment
router.delete('/:id', deletePayment); // Delete Payment

module.exports = router;

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create new payment
 *     description: Process a new payment transaction
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 format: float
 *               currency:
 *                 type: string
 *               payment_method:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', validatePayment, createPayment);

/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     description: Retrieve list of payments
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter by payment status
 *     responses:
 *       200:
 *         description: List of payments
 */
router.get('/', getPayments);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment details
 *       404:
 *         description: Payment not found
 */
router.get('/:id', getPaymentById);