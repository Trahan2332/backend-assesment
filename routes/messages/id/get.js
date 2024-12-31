const getDBMessageById = require('../../../models/messages')

const getMessageById = async (req, res) => {
  try {

    /**
     * Retrieve a thread with its messages
     * 
     * - Sort by timestamp
     * - paginate
     */

    const { id } = req.body

    // Recursively grab if parentId exists, doing it here is ugly and time consuming on account of connecting to the DB
    const messages = getDBMessageById(id);

    // Sort ascending
    sortedMessages = messages.sort((a, b) => a - b)

    handleResponse(res, 200, 'New Message Created', sortedMessages)

    console.log('Getting Message by ID')
  } catch (e) {
    
  }
}

module.exports = getMessageById;