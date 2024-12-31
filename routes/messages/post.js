const uuid = require('uuid')
const { createDBMessage } = require('../../models/messages')
const handleResponse = require('../../helpers/handleResponse')

const createMessage = async (req, res, next) => {
  try {

    /**
     * Here we create a message thread, could be a parent message or a submessage (or reply).
     * 
     * - id
     * - author
     * - content
     * - timestamp
     * - formatted date
     * - parentId
     */
    console.log('Creating New Message')

    // Lack of parent ID assumes this is the beginning of a new thread
    const {
      author,
      content,
      parentId = null
    } = req.body;

    const timestamp = new Date().toISOString()
    const id = uuid.v6();

    const createMessageRequest = {
      id,
      author,
      content,
      timestamp,
      parentId
    }

    const createMessageResponse = createDBMessage(createMessageRequest)

    handleResponse(res, 200, 'New Message Created', createMessageResponse)
  } catch (e) {
    console.log('Error occured:', e)
    next(e)
  }
}

module.exports = createMessage;