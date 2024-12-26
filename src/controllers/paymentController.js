const prisma = require('../prismaClient');

// Create Payment
const createPayment = async (req, res) => {
  try {
    const { order_id, payment_method, amount_paid, payment_status } = req.body;
    const payment = await prisma.payments.create({
      data: {
        order_id,
        payment_method,
        amount_paid,
        payment_status,
      },
    });
    res.status(201).json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

// Get All Payments
const getPayments = async (req, res) => {
  try {
    const payments = await prisma.payments.findMany();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};

// Get Payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await prisma.payments.findUnique({
      where: { id: parseInt(id) },
    });
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ error: 'Payment not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
};

// Update Payment
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { payment_method, amount_paid, payment_status } = req.body;
    const updatedPayment = await prisma.payments.update({
      where: { id: parseInt(id) },
      data: {
        payment_method,
        amount_paid,
        payment_status,
      },
    });
    res.status(200).json(updatedPayment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update payment' });
  }
};

// Delete Payment
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.payments.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete payment' });
  }
};

module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
