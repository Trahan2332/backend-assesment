var express = require('express');
var router = express.Router();

const dbPool = require('../../services/db.js')

const handleError = require('../../helpers/handleError.js')

const getMessageById = require('./id/get.js')
const createMessage = require('./post.js');
const updateMessage = require('./put.js')

router.use(handleError)

// TEST DB CONNECTION
router.get('/postgres', async (req, res) => {
  const result = await dbPool.query('SELECT current_database()')
  return res.send(`Connected to database: ${result.rows[0].current_database}`)
})


// GET message threads
router.get('/:id', getMessageById);

// Create message thread resource
router.post('/', createMessage);

// Update a message thread with a reply
router.put('/:id', updateMessage)

module.exports = router;
