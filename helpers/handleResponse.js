const handleResponse = (res, status, message, data = null) => {
  res.status(status).send({
    status,
    message,
    data
  })
}

module.exports = handleResponse;