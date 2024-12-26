const validateOrder = (req, res, next) => {
    const { user_id, total_amount, status } = req.body;
  
    if (!user_id || total_amount === undefined || !status) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    next(); // Lanjutkan ke controller jika validasi berhasil
  };
  
  module.exports = validateOrder;
  