module.exports = function(err, req, res, next) {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json({ message });
};