const pool = require('../services/db.js')

const createDBMessage = async (messageRequest) => {
  /**
   * Creating a base thread, parentId is NULL
   * 
   * Creating a child message, parentId must be specified
   */
  const {
    id,
    author,
    content,
    timestamp,
    parentId
  } = messageRequest

  const result = await pool.query(`
    INSERT INTO messages (id, author, content, timestamp, parentId) VALUES (${id}, ${author}, ${content}, ${timestamp}, ${parentId}) RETURNING *`);

  return result.rows[0]
}

const getDBMessageById = async (messageId) => {
  // Implement recursive searching here by parentID from the previous message
  const result = await pool.query(`SELECT * FROM messages where id = ${messageId}`);

  // RECURSIVE
  /**
   * 1. Get item with given messageID
   * 2. Check items with parentID as messageId (child node)
   * 3. Repeat step 2 with result from step 2 until there are no more items to be retrieved 
   */

  return result.rows[0]
}


// Technically not required how I designed messages
const updateMessageById = async (id) => {}

module.exports = {
  createDBMessage,
  getDBMessageById
}