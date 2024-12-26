const validateOrderItem = (req, res, next) => {
    const { order_id, product_id, quantity, price } = req.body;
  
    if (!order_id || !product_id || quantity === undefined || price === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    next(); // Lanjutkan ke controller jika validasi berhasil
  };
  
  module.exports = validateOrderItem;
  