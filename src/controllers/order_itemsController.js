const prisma = require('../prismaClient');

// Create Order Item
const createOrderItem = async (req, res) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const orderItem = await prisma.order_Items.create({
      data: {
        order_id,
        product_id,
        quantity,
        price,
      },
    });
    res.status(201).json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create order item' });
  }
};

// Get All Order Items
const getOrderItems = async (req, res) => {
  try {
    const orderItems = await prisma.order_Items.findMany();
    res.status(200).json(orderItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch order items' });
  }
};

// Get Order Item by ID
const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await prisma.order_Items.findUnique({
      where: { id: parseInt(id) },
      include: { Orders: true, Products: true }, // Menyertakan Orders dan Products terkait
    });
    if (orderItem) {
      res.status(200).json(orderItem);
    } else {
      res.status(404).json({ error: 'Order Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch order item' });
  }
};

// Update Order Item
const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price } = req.body;
    const updatedOrderItem = await prisma.order_Items.update({
      where: { id: parseInt(id) },
      data: {
        quantity,
        price,
      },
    });
    res.status(200).json(updatedOrderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update order item' });
  }
};

// Delete Order Item
const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.order_Items.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: 'Order Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete order item' });
  }
};

module.exports = {
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
