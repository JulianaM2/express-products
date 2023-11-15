/**
 * Build a common service response.
 *
 * @param {number} code
 * @param {Object} data
 * @param {string} message
 * @return {Object}
 */
function buildResponse(code, data, message) {
  return {
    code,
    data: {
      message,
      data,
    }
  }
}

export {
  buildResponse,
}