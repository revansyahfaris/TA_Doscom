const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Log error ke console untuk debug
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  };
  
  module.exports = errorHandler;
  