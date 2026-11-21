// Custom middleware to log every incoming request.
const logger = (req, res, next) => {
  const date = new Date().toISOString();
  console.log(`[${date}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
