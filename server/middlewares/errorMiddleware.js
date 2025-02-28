function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    message: err.message || 'Something went worng!',
    stack: err.stack,
    status: err.status || 500,
  });
}

export default errorHandler;
