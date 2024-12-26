const validateCategory = (req, res, next) => {
    const { name, description } = req.body;
  
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
  
    next(); // Lanjutkan ke controller jika validasi berhasil
  };
  
  module.exports = validateCategory;
  