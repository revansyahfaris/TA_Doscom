const validatePayment = (req, res, next) => {
    const { order_id, payment_method, amount_paid, payment_status } = req.body;
  
    if (!order_id || !payment_method || !amount_paid || !payment_status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    next(); // Lanjutkan ke controller jika validasi berhasil
  };
  
  module.exports = validatePayment;
  