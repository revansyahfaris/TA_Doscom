const prisma = require('../prismaClient');

// Create Order
const createOrder = async (req, res) => {
  try {
    const { user_id, total_amount, status } = req.body;
    const order = await prisma.orders.create({
      data: {
        user_id,
        total_amount,
        status,
      },
    });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await prisma.orders.findMany();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get Order by ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await prisma.orders.findUnique({
      where: { id: parseInt(id) },
      include: { Order_Items: true, Payments: true }, // Menyertakan Order_Items dan Payments terkait
    });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

// Update Order
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { total_amount, status } = req.body;
    const updatedOrder = await prisma.orders.update({
      where: { id: parseInt(id) },
      data: {
        total_amount,
        status,
      },
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update order' });
  }
};

// Delete Order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.orders.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete order' });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
