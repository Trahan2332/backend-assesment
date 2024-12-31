const handleError = (e, req, res, next) => {
  console.log(e.stack)

  // For the case of server errors
  res.status(500).send({
    status: 500,
    message: 'An Unknown Error Occured',
    error: e.message
  })
}

module.exports = handleError;